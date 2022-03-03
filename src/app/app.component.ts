import { Component } from '@angular/core';
import { ModeloUsuario } from './interface/modelo';
import { ServiceUsuariosService } from './service/service-usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  usuariosServ:ModeloUsuario[]=[];

   constructor(private servicioUs:ServiceUsuariosService) { }
salirM(){
  this.usuariosServ.pop;
}
  ngOnInit(): void {
    this.usuariosServ = this.servicioUs.getUsuarios();
    console.log("Datos");
    console.log(this.usuariosServ);

}

}