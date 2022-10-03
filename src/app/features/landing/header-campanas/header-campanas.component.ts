import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-campanas',
  templateUrl: './header-campanas.component.html',
  styleUrls: ['./header-campanas.component.scss']
})
export class HeaderCampanasComponent implements OnInit {

  @Input() imagen_campana!: string;

  @Input() width_imagen_campana!: number;

  @Input() eslogan_campana!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
