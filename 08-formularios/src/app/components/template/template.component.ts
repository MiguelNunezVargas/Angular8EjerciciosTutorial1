import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent  {
  
  usuario: Usuario = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: 'CHI',
    sexo: 'Hombre',
    acepta: true
  };
  
  paises = [{
    codigo: 'CHI',
    nombre: 'Chile'
  }, {
    codigo: 'JPN',
    nombre: 'Japón'
  }];

  sexos: string[] = ['Hombre', 'Mujer'];


  constructor() { }
  
  guardar( forma: NgForm ) {
    console.log('Formulario Posteado');
    console.log( 'ngForm', forma );
    console.log('valor', forma.value);
    console.log('Usuario', this.usuario);
  }
}

interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  pais: string;
  sexo: string;
  acepta: boolean;
}
