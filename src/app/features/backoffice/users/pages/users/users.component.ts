import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usuariosObtenidos!: any[];

  constructor() { }

  ngOnInit(): void { }

  eliminarUsuario(_event: any){
    //aqui se ejecutara la funcion para eliminar usuario
  }

}
