import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-detalle-novedad',
  templateUrl: './detalle-novedad.component.html',
  styleUrls: ['./detalle-novedad.component.scss']
})
export class DetalleNovedadComponent implements OnInit {
title!:string
img!: string
detalle!:string
  constructor(private route: ActivatedRoute) { 
    this.title=" Nombre Novedad"
    this.img = "https://ongapi.alkemy.org/storage/rSpCdlZRC1.png"
    this.detalle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ullamcorper et bibendum at neque, tellus dolor nibh netus. Varius odio dictum blandit suscipit praesent purus ultrices. Cras suspendisse arcu hendrerit sed faucibus platea. Facilisis molestie quisque ultrices commodo nunc cursus sit nisi. Vivamus sed euismod rutrum placerat ut. Eu in facilisis vestibulum at. Morbi amet mattis sed elementum cursus. Interdum quisque sed viverra integer diam purus, tortor commodo. Duis sed vulputate suspendisse consectetur in mauris. Est volutpat quisque faucibus ut turpis sagittis massa, quam. Tincidunt in rutrum aenean neque, volutpat sit. Dictum diam malesuada condimentum ultrices amet gravida aliquam lobortis. Dolor enim facilisi semper odio at est bibendum porta augue. Lectus morbi tellus odio eu."
  }
  ngOnInit() {}

}
