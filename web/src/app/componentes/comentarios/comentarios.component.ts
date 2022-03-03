import { Component, OnInit } from '@angular/core';
import { ModeloComentario } from 'src/app/interface/modelo';
import { ServiceJuegosService } from 'src/app/services/service-juegos.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
coment:ModeloComentario[]=[];
  constructor(private comentdisp:ServiceJuegosService) { }

  ngOnInit(): void {
    this.comentdisp.disparacoment.subscribe((res:any)=>{
      console.log("LISTAAAAAA");
      console.log(res);
      this.coment.push(res.data);
    });
  }

}
