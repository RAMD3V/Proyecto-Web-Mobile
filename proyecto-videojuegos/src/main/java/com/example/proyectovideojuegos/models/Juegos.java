package com.example.proyectovideojuegos.models;



import java.io.File;

import javax.persistence.*;

@Entity
@Table(name="juegos")
public class Juegos{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private Long id;
    private String usuario;
    private String nombre;
    private Number year;
    private String descripcion;
    private File imagjuego;
    public String getUsuario() {
        return usuario;
    }
   


    public String getDescripcion() {
        return descripcion;
    }



    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }



    public File getImagjuego() {
        return imagjuego;
    }



    public void setImagjuego(File imagjuego) {
        this.imagjuego = imagjuego;
    }


    public Number getYear() {
        return year;
    }
    public void setYear(Number year) {
        this.year = year;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
}