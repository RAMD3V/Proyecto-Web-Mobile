import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloJuegos } from '../interface/modelo';

@Injectable({
  providedIn: 'root'
})
export class ApijuegosService {
  videos:string = "http://localhost:8080/juegos";
  

  constructor(private http:HttpClient) { }
  
  getVideojuegos(){
    return this.http.get(this.videos);
  }
  addJuego(juego:ModeloJuegos){
    console.log(juego);
    return this.http.post(this.videos,juego);
  }
  busquedaJuego(jueg: string){
    let busqueda = new HttpParams();
    busqueda = busqueda.append('query', jueg);
    return this.http.post(this.videos+'/search/', busqueda);
  }
}