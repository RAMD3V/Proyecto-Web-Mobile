import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModeloJuegos } from 'src/app/interface/modelo';
import { ServiceJuegosService } from 'src/app/services/service-juegos.service';

@Component({
  selector: 'app-listasugerencias',
  templateUrl: './listasugerencias.component.html',
  styleUrls: ['./listasugerencias.component.css']
})
export class ListasugerenciasComponent implements OnInit {
  servjuegos:ModeloJuegos[]=[];
  video:[]=[];
  busqueda:[]=[];
  njuego: FormControl = new FormControl();
  juegosB: ModeloJuegos[] = [];
  estado:boolean=false;
  constructor( private juegos:ServiceJuegosService) { }

  buscarGame(){
    console.log(this.njuego.value);
      this.juegos.busquedaJuego(this.njuego.value).subscribe((res: any)=>{
        this.juegosB = res;       
      });
      console.log(this.juegosB);
      this.estado=true;
    }
  ngOnInit(): void {
    this.juegos.getVideojuegos().subscribe((res:any)=>{
    this.video = res;
    console.log(this.video)
    
  });

  }
  
}
