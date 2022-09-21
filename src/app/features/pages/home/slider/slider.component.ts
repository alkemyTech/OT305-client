import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  //cambiar despues por los endopoints api sliders
  public data = ([] = [
    {
      name: "Juntos somos más",
      description: "<p>Sé parte de nuestra comunidad y cambiemos el mundo.</p>",
      image: "http://ongapi.alkemy.org/storage/2sjocle1Nz.png",
    },
    {
      name: "Los niños son el futuro.",
      description: "Acompañemos a nuestros niños a construir un mejor futuro.",
      image: "http://ongapi.alkemy.org/storage/HjvFnkQSgV.png",
    },
    {
      name: "Exploremos nuevos horizontes",
      description: "Somos impulsores de nuevas experiencias.",
      image: "http://ongapi.alkemy.org/storage/AdEulUIBmO.png",
    },
    {
      name: "Cuidamos de vos.",
      description:
        "Queremos estar junto a vos, nuestra comunidad esta para apoyarte.",
      image: "http://ongapi.alkemy.org/storage/bvaTynsmk9.png",
    },
    {
      name: "Compartí",
      description:
        "Compartí con nosotros, queremos que seas parte de nuestra comunidad.",
      image: "http://ongapi.alkemy.org/storage/4DfanYm37r.png",
    },
  ]);
  constructor() {}

  ngOnInit(): void {}
}
