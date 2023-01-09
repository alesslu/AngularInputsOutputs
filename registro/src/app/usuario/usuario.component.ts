import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input() usuarioRegistro: string = 'no hay registro'

  constructor() {}
  ngOnInit(): void {
    
  }

}
