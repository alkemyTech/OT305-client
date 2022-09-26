import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {

  @Input() usuarios!: any[];

  @Output() usuarioParaEditar: EventEmitter<any> = new EventEmitter();

  @Output() usuarioParaEliminar: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  capturarUsuarioParaEditar(usuario: any){
    return this.usuarioParaEditar.emit(usuario);
  }

  capturarUsuarioParaEliminar(usuario: any){
    return this.usuarioParaEliminar.emit(usuario);
  }

}
