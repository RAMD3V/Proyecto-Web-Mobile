package com.example.proyectovideojuegos.repositories;

import java.util.List;
import java.util.Optional;

import com.example.proyectovideojuegos.models.Juegos;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface JuegoRepository extends CrudRepository<Juegos,Long>{
    Optional<Juegos> findById(Long id);
    @Query(value = "SELECT * FROM juegos j WHERE j.nombre LIKE %:keyword%", nativeQuery = true)
    List<Juegos> buscarGame(@Param("keyword") String keyword);   
}