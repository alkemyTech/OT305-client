import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usuariosObtenidos!: Usuario[];

  constructor() { }

  ngOnInit(): void { }

  eliminarUsuario(_event: Usuario){
    //aqui se ejecutara la funcion para eliminar usuario
  }

}
