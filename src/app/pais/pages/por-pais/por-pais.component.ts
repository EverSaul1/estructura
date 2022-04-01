import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/pais-interface";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  nombrePais:String = ''
  hayError: boolean = false
  paises: Country[] = []


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.hayError = false
    this.paisService.buscarPais(this.nombrePais).subscribe(
      res => {
        this.paises = res

        console.log(res)
      }, (err)=>{

        this.hayError = true
        console.log(err)
    });
    console.log(this.nombrePais)
  }
}
