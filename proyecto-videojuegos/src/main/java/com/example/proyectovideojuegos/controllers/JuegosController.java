package com.example.proyectovideojuegos.controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.proyectovideojuegos.models.Juegos;
import com.example.proyectovideojuegos.services.JuegoServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController // Le decimos que va a ser una respuest de tipo REST
@RequestMapping("/juegos") //RUTA DONDE VAMOS A LLAMAR
@CrossOrigin(origins = "*",methods = {RequestMethod.GET,RequestMethod.POST})
public class JuegosController {
    @Autowired
    JuegoServices juegservice;

    @GetMapping()
    public ArrayList<Juegos> obteneJuegos(){
        return juegservice.obtenerJuegos();
    }

    @PostMapping()
    public String guardarvide(@RequestBody Juegos juego){
        System.out.println(juego.getNombre());
        return juegservice.guardarvide(juego);

    }
    @DeleteMapping()
    public String borrarjuego(@RequestBody Juegos juego){
        return juegservice.borrarjuego(juego);
    }
    
    @PostMapping("/search")
    public List<Juegos> BuscarProducto(@RequestParam("query") String query){
        var nombreJ = juegservice.BuscarPorPalabra(query);
        return nombreJ;
    }
}
