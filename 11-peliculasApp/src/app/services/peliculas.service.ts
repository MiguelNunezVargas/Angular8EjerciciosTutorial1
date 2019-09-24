import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  
  private apikey: string = '<API_KEY>';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  
  peliculas: any[] = [];

  constructor(private http: HttpClient) { }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );
      
    let desdeMes: number | string = desde.getMonth() + 1;
    let hastaMes: number | string = hasta.getMonth() + 1;
    if (desdeMes < 10) {
      desdeMes = '0' + desdeMes;
    }
    
    if (hastaMes < 10) {
      hastaMes = '0' + hastaMes;
    }

    const desdeStr = `${ desde.getFullYear() }-${ desdeMes }-${ desde.getDate() }`;
    const hastaStr = `${ hasta.getFullYear() }-${ hastaMes }-${ hasta.getDate() }`;
    
    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      map( (res: any) => res.results)
    ); 
  }
  

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      map( (res: any) => res.results)
    );          
  }

  getPopularesNinos() {
    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      map( (res: any) => res.results)
    );          
  }

  buscarPelicula( texto: string ){
    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      map( (res: any) => {
        this.peliculas = res.results;
        console.log(this.peliculas);
        return res.results;
      })
    ); 
  }

  getPelicula(id: string) {
    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      map( (res: any) => res)
    );          
  }





}
