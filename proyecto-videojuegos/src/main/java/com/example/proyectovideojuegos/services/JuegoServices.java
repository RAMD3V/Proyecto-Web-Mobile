package com.example.proyectovideojuegos.services;

import java.util.ArrayList;
import java.util.List;

import com.example.proyectovideojuegos.models.Juegos;
import com.example.proyectovideojuegos.repositories.JuegoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JuegoServices{
    @Autowired
    JuegoRepository JuegoRepo;

    public ArrayList<Juegos> obtenerJuegos(){
        return (ArrayList<Juegos>) JuegoRepo.findAll();
    }

    public String guardarvide(Juegos juego){
        JuegoRepo.save(juego);
       return "guardado correctamente";
   }
   public String borrarjuego(Juegos juego){
    JuegoRepo.delete(juego);
   return "Borrado correctamente";
    }
    public List<Juegos> BuscarPorPalabra(String juegob) {
        return JuegoRepo.buscarGame(juegob);
    }
}
