import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModeloJuegos } from 'src/app/interface/modelo';
import { ServiceJuegosService } from 'src/app/services/service-juegos.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {

  
  formulario=this.formularioJueg.group({
    usuario:"",
    nombre:"",
    year:"",
    descripcion:"",
    imagjuego:""
  })

  jueg:ModeloJuegos[]=[];

  constructor(private formularioJueg:FormBuilder, private servicioJuego:ServiceJuegosService) { }

  guardarSug(){
    const nuevaSug : ModeloJuegos={
      usuario:this.formulario.get("usuario")?.value,
      nombre:this.formulario.get("nombre")?.value,
      year:this.formulario.get("year")?.value,
      descripcion:this.formulario.get("descripcion")?.value,
      imagjuego:this.formulario.get("imagjuego")?.value
    }
    alert("Sugerencia guardada correctamente");
    this.servicioJuego.addJuego(nuevaSug);

    this.servicioJuego.addJuego(nuevaSug).subscribe((res:any)=>{ 
      console.log(res);
   },(error) => {
    console.log(error);
   }
   
 )
     
   this.jueg.push(nuevaSug);
   console.log(nuevaSug);
     this.formulario.reset();
  }
  ngOnInit(): void {
  }

}
