import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModeloComentario, ModeloGuardarImg } from '../interface/modelo';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {

  guardarimg:ModeloGuardarImg[]=[]
  coment:ModeloComentario[]=[];
  formulariocom=this.formcoment.group({
    user:'',
    comentario:'',
    punt:''

  })
estado:boolean=false;
  constructor(private formcoment:FormBuilder) { }

  guardarCom(){
    const nuevoComent:ModeloComentario={
      user:this.formulariocom.get("user")?.value,
      comentario:this.formulariocom.get("comentario")?.value,
      punt:this.formulariocom.get("punt")?.value
        
    }
    this.coment.push(nuevoComent);
    console.log(nuevoComent);
    this.estado=true;
  }
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,

  }

  ngOnInit() {
  }

}
