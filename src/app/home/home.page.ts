import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModeloUsuario } from '../interface/modelo';
import { ServiceUsuariosService } from '../service/service-usuarios.service';
import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formUsuario=this.formularioU.group({
    nombre:"",
    correo:"",
    pass:""
  })

  cancion:ModeloUsuario[]=[];


  constructor(private formularioU:FormBuilder, private enviardts:ServiceUsuariosService) { }

  guardarU(){
    const guardar : ModeloUsuario={
      nombre:this.formUsuario.get("nombre")?.value,
      correo:this.formUsuario.get("correo")?.value,
      pass:this.formUsuario.get("pass")?.value
    }
    this.enviardts.addUsuarios(guardar);
    console.log(guardar);
    this.cancion.push(guardar);
    this.formUsuario.reset();
    
  }
}