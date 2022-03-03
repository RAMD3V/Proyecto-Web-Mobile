import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModeloComentario } from 'src/app/interface/modelo';
import { ServiceJuegosService } from 'src/app/services/service-juegos.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formulario=this.formulariocOM.group({
    user:"",
    comentario:"",
    punt:"",
  })



  constructor(private formulariocOM:FormBuilder, private servicioJComent:ServiceJuegosService) { }

  guardarCom(){
    const nuevoCom : ModeloComentario={
      user:this.formulario.get("user")?.value,
      comentario:this.formulario.get("comentario")?.value,
      punt:this.formulario.get("punt")?.value
    }
   this.servicioJComent.disparacoment.emit({data:nuevoCom});
   this.formulario.reset();
  }

  ngOnInit(): void {
  }

}