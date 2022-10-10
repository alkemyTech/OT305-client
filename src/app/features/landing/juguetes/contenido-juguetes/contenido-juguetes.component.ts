import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido-juguetes',
  templateUrl: './contenido-juguetes.component.html',
  styleUrls: ['./contenido-juguetes.component.scss']
})
export class ContenidoJuguetesComponent implements OnInit {

  init!: number
  temporizador: any
  diaActual!: number
  dia!: number
  data!: number
  counter!: any
  counterSegundos!: number
  titulo!: string

  constructor() {
  this.titulo = "Titulo"
  }
   ngOnInit() {
    this.Temporizador()
  }

  Temporizador(){
    this.init = new Date("2022-11-03T16:32:21.000000Z").getTime()
  
    this.temporizador  =  setInterval(()=>{
           this.diaActual = new Date().getTime()
           var distancia = this.init - this.diaActual
           var dia = Math.floor(distancia / (1000 * 60 * 60 * 24))
           var horasRestantes = Math.floor(distancia % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))  
           var minutosRestantes = Math.floor(distancia % (1000 * 60 * 60) / (1000 * 60)) 
           var segundosRestantes = Math.floor(distancia % (1000 * 60) / 1000)
           this.counter = dia + "d" + "  " +  horasRestantes + "h" + "  " + minutosRestantes +"m" + "  " + segundosRestantes + "s"
        
            if ( distancia < 0 ){
             clearInterval(this.temporizador)
             this.counter = "Tiempo expirado"
            }
        }, 1000) 
  }
}
