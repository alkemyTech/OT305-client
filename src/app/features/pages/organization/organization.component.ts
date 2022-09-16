import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-organization",
  templateUrl: "./organization.component.html",
  styleUrls: ["./organization.component.scss"],
})
export class OrganizationComponent {
  datos: any = {
    id: 1,
    name: "ONG - Somos Más",
    logo: "http://ongapi.alkemy.org/storage/oqhHt6tOMb.png",
    short_description:
      "<p>Desde 2000 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social.</p>",
    long_description:
      "Somos más surge como ONG desde la necesidad de los chicos mas vulenerados socialmente. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos. Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.",
    welcome_text: "Bienvenidos a Somos  Más",
    address: "Paraguay 733, (C1057AAI) Ciudad Autónoma de Buenos Aires",
    phone: "1160112988",
    cellphone: null,
    created_at: "2021-03-31T12:33:48.000000Z",
    updated_at: "2022-09-05T17:31:11.000000Z",
    deleted_at: null,
    group_id: null,
    facebook_url: "https://www.facebook.com/Somos_Mas",
    linkedin_url: "https://www.linkedin.com/Somos_Mas",
    instagram_url: "https://www.instagram.com/SomosMas",
    twitter_url: "https://www.twiiter.com/SomosMas",
  };
  
  constructor() {}

}
