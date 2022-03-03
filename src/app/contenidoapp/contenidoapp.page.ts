import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModeloJuegos } from '../interface/modelo';
import { ApijuegosService } from '../service/apijuegos.service';

@Component({
  selector: 'app-contenidoapp',
  templateUrl: './contenidoapp.page.html',
  styleUrls: ['./contenidoapp.page.scss'],
})
export class ContenidoappPage implements OnInit {
  servjuegos:ModeloJuegos[]=[];
  video:[]=[];
  njuego: FormControl = new FormControl();
  juegosB: ModeloJuegos[] = [];
  estado:boolean=false;
  constructor( private juegos:ApijuegosService) { }
  buscarGame(){
    console.log(this.njuego.value);
      this.juegos.busquedaJuego(this.njuego.value).subscribe((res: any)=>{
        this.juegosB = res;       
      });
      console.log(this.juegosB);
      this.estado=true;
    }
  ngOnInit() {
    this.juegos.getVideojuegos().subscribe((res:any)=>{
      this.video = res;
      console.log(this.video)
     });

  }

}
