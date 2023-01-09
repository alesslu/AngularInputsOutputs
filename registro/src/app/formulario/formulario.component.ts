import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  model =  {
    name: "",
    dni: "",
    estado: ""
  } 


  constructor(){}
  ngOnInit():void{
  }

  valores='';

  onSubmit(values:any): void{
    console.log('Form values: ',values);
    this.valores=values;
  }


}
