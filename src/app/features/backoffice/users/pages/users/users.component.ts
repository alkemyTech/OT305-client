import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usuariosObtenidos!: any[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.httpService.get("https://ongapi.alkemy.org/api/users", false)
      .subscribe((res: any) => {
        return this.usuariosObtenidos = res.data;
      })
  }

  eliminarUsuario(_event: any){
    //aqui se ejecutara la funcion para eliminar usuario
  }

}
