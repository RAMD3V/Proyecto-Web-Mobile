import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModeloJuegos } from '../interface/modelo';
import { ApijuegosService } from '../service/apijuegos.service';
import { alertController } from '@ionic/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})
export class SugerenciasPage implements OnInit {
  formulario=this.formularioJueg.group({
    usuario:"",
    nombre:"",
    year:"",
    descripcion:"",
    imagjuego:""
  })

  jueg:ModeloJuegos[]=[];

  constructor(private formularioJueg:FormBuilder, private servicioJuego:ApijuegosService,
    public alerta:AlertController) { }

    async guardarSug(){
    const nuevaSug : ModeloJuegos={
      usuario:this.formulario.get("usuario")?.value,
      nombre:this.formulario.get("nombre")?.value,
      year:this.formulario.get("year")?.value,
      descripcion:this.formulario.get("descripcion")?.value,
      imagjuego:this.formulario.get("imagjuego")?.value
      
    }
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

   
  let alertguardado= await this.alerta.create({
    header: 'Sugerencia',
    message:"Tu sugerencia se ha guardado correctamente",
    buttons: ['Aceptar']
 });
 alertguardado.present();
}

  ngOnInit(): void {
  }

}
