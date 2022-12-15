import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.css"],
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = "Natan";

  constructor() {
    console.log(`Construtor ${this.nome}`)
  }

  // executa quando o valor de propriedade é alterada via input()
  ngOnChanges(): void {
    console.log(`OnChanges ${this.nome}`);
  }

  //inicio de vida
  ngOnInit() {
    this.nome = this.nome + "X";
    console.log(`OnInit ${this.nome}`);
  }
}
