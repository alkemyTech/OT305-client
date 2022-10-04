import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Usuario } from 'src/app/core/models/user.model';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-form-search-users',
  templateUrl: './form-search-users.component.html',
  styleUrls: ['./form-search-users.component.scss']
})
export class FormSearchUsersComponent implements OnInit, OnDestroy {

  @Output() usuarioBuscado = new EventEmitter<Usuario[]>()

  usuariosObtenidos!: Usuario[];

  subject$ = new Subject();

  textoSolicitado!: string;

  rolSolicitado: string = "Todos";

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();

    this.subject$.pipe(
      debounceTime(500),
      switchMap(data => {
        if(this.rolSolicitado !== "Todos"){
          return this.httpService.get(`https://ongapi.alkemy.org/api/users?search=${this.textoSolicitado}&role=${this.rolSolicitado}`, false)
        }
        else{
          return this.httpService.get(`https://ongapi.alkemy.org/api/users?search=${this.textoSolicitado}`, false)
        }
      })
    )
    .subscribe((res: any) => {
      return this.usuarioBuscado.emit(res.data);
    })
  }

  ngOnDestroy(): void {
    this.subject$.unsubscribe();
  }

  obtenerUsuarios(){
    this.httpService.get("https://ongapi.alkemy.org/api/users", false)
      .subscribe((res: any) => {
        this.usuariosObtenidos = res.data;
        return this.usuarioBuscado.emit(this.usuariosObtenidos);
      })
  }

  searchUsuario(texto: string){
    if(texto.length >= 2){
      this.textoSolicitado = texto;
      this.subject$.next(texto);
    }
    else{
      this.usuarioBuscado.emit(this.usuariosObtenidos);
    }
  }

  setRol(rol: string){
    if(this.textoSolicitado.length >= 2 && this.rolSolicitado !== rol){
      this.rolSolicitado = rol;
      this.subject$.next(rol);
    }
  }

}
