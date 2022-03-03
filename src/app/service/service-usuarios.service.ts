import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloGuardarImg, ModeloUsuario } from '../interface/modelo';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsuariosService {
  usuariosServ:ModeloUsuario[]=[];
  imgguardada:ModeloGuardarImg[]=[];
  user:string;
  constructor(private http:HttpClient) { }

getUsuarios(){
  return this.usuariosServ;
}
addUsuarios(user:ModeloUsuario){
  return this.usuariosServ.push(user);
}
salir(){
  return this.usuariosServ=[];
}
guararimg(){
  return this.imgguardada;
}
}
