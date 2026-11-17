package com.dwes.rutas.service;

import com.dwes.rutas.errors.CompletedException;
import com.dwes.rutas.errors.FindException;
import com.dwes.rutas.errors.ValidationException;
import com.dwes.rutas.model.Ruta;
import com.dwes.rutas.repository.RutaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RutaService {
    private RutaRepository rutaRepository;

    public RutaService(RutaRepository rutaRepository) { this.rutaRepository = rutaRepository; }

    public List<Ruta> obtenerRutas(){ return rutaRepository.findAll(); }

    public Ruta obtenerPorId(Long id){
        if (rutaRepository.findById(id) == null){
            throw new FindException("El ID no existe");
        }
        return rutaRepository.findById(id);
    }

    public Ruta crearRuta(Ruta rutaNueva){
        if (validarRuta(rutaNueva)){
            return rutaRepository.save(rutaNueva);
        }
        return null;
    }

    private boolean validarRuta(Ruta ruta){
        if (ruta.getKm() > 100 || ruta.getKm() < 1){
            throw new ValidationException("La distancia no puede ser mayor que 100km ni menor que 1km");
        }
        if (ruta.getNombre() == ""){
            throw new ValidationException("El nombre no puede estar vacío");
        }
        if (rutaRepository.existeNombre(ruta)){
            throw new ValidationException("Este nombre ya existe");
        }
        return true;
    }

    public Double obtenerKmTotales(){return rutaRepository.allKm();}

    public List<Ruta> rutasConNombre(String nombre){
        if (nombre == null){
            return rutaRepository.findAll();
        }
        return rutaRepository.findByname(nombre);
    }

    public Ruta completarRuta(Long id){
        if (rutaRepository.findById(id).isHecha()){
            throw new CompletedException("Esta ruta ya está completada");
        }
        if (rutaRepository.markCompleted(id) != null){
            return rutaRepository.findById(id);
        }
        throw new FindException("No existe esta ruta");
    }

    public Ruta borrarRuta(Ruta ruta){
        if (rutaRepository.findById(ruta.getId()).isHecha()){
            throw new CompletedException("Esta ruta ya está completada");
        }
        if (rutaRepository.delete(ruta) != null){
            return ruta;
        }
        throw new FindException("No existe esta ruta");
    }
}
