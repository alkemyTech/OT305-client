import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listado-nosotros",
  templateUrl: "./listado-nosotros.component.html",
  styleUrls: ["./listado-nosotros.component.scss"],
})
export class ListadoNosotrosComponent implements OnInit {
  //posterior se cambiara al endpoint de la api Member/get_members
  public members = [
    {
      name: "Clara Santos",
      image: "http://ongapi.alkemy.org/storage/eJhxlEOK78.png",
      description: "Psicóloga infatil",
      facebookUrl: "https://www.google.com/",
      linkedinUrl: "https://ongapi.alkemy.org/",
    },
    {
      name: "Marta Sosa",
      image: "http://ongapi.alkemy.org/storage/HK7NEsonGt.png",
      description: "Asistente social",
      facebookUrl: "https://www.google.com/",
      linkedinUrl: "https://www.google.com/",
    },
    {
      name: "Susana Perez",
      image: "http://ongapi.alkemy.org/storage/XtV4g2tm8k.png",
      description: "Asistente social",
      facebookUrl: "https://www.google.com/",
      linkedinUrl: "https://www.google.com/",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
