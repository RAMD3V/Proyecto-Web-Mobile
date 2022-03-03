import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloJuegos } from '../interface/modelo';


@Injectable({
  providedIn: 'root'
})
export class ServiceJuegosService {
  videos:string = "http://localhost:8080/juegos";
  @Output() disparacoment:EventEmitter<any>=new EventEmitter();

  constructor(private http:HttpClient) { }
  
  getVideojuegos(){
    return this.http.get(this.videos);
  }
  addJuego(juego:ModeloJuegos){
    console.log(juego);
    return this.http.post(this.videos,juego);
  }
  borrarjuego(juego:String){
    return this.http.delete(this.videos+juego);
  }
  
  busquedaJuego(jueg: string){
    let busqueda = new HttpParams();
    busqueda = busqueda.append('query', jueg);
    return this.http.post(this.videos+'/search/', busqueda);
  }


}