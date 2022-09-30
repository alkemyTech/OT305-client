import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-form-search-users',
  templateUrl: './form-search-users.component.html',
  styleUrls: ['./form-search-users.component.scss']
})
export class FormSearchUsersComponent implements OnInit {

  @Output() usuarioBuscado = new EventEmitter()

  usuariosObtenidos!: any[];

  subject$ = new Subject();

  textoSolicitado!: string;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();

    this.subject$.pipe(
      debounceTime(1000),
      switchMap(data =>
        this.httpService.get(`https://ongapi.alkemy.org/api/users?search=${this.textoSolicitado}`, false)
      )
    )
    .subscribe((res: any) => {
      return this.usuarioBuscado.emit(res.data);
    })
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

}
