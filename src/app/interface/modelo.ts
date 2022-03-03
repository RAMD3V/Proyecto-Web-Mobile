export interface ModeloUsuario {
    nombre:String;
    correo:String;
    pass:String;
}
export interface ModeloGuardarImg {
    guardarimg:string;
}
export interface ModeloJuegos{
    usuario:String;
    nombre:String;
    year:Number;
    descripcion:String;
    imagjuego:File;
}
export interface ModeloComentario{
    user:String;
    comentario:String;
    punt:Number;
}

