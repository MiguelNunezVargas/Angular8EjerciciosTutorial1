import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  
  pelicula: any;
  regresarA: string = '';
  busqueda: string = '';

  constructor( public peliculasService: PeliculasService,
               public activatedRoute: ActivatedRoute) {
      
      this.activatedRoute.params.subscribe( (parametros) => {
        this.regresarA = parametros['pag'];

        if (parametros['busqueda'] ) {
          this.busqueda = parametros['busqueda'];
        }

        this.peliculasService.getPelicula(parametros['id']).subscribe( (pelicula) => {
          console.log(pelicula);
          this.pelicula = pelicula;          
        });    
      });
    }

  ngOnInit() {
  }

}
