package com.dwes.rutas.repository;

import com.dwes.rutas.errors.CompletedException;
import com.dwes.rutas.errors.FindException;
import com.dwes.rutas.model.Ruta;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class RutaRepository {
    private List<Ruta> lista = new ArrayList<>();
    private Long ultimoId = 0L;

    public List<Ruta> findAll() {return lista;}

    public Ruta findById(Long id){
        return lista.stream()
                .filter(ruta -> ruta.getId().equals(id))
                .findFirst().orElse(null);
    }

    public Ruta save(Ruta rutaNueva){
        for (int i = 0; i < lista.size(); i++){
            if (lista.get(i).getId().equals(rutaNueva.getId())){
                lista.set(i, rutaNueva);
                return rutaNueva;
            }
        }

        rutaNueva.setId(++ultimoId);
        rutaNueva.setHecha(false);
        lista.add(rutaNueva);
        return rutaNueva;
    }

    public List<Ruta> findByname(String nombre){
       List<Ruta> listaNombre = new ArrayList<>();
        for (Ruta r : lista){
            if (r.getNombre().contains(nombre)){
                listaNombre.add(r);
            }
        }
        return listaNombre;
    }

    public Double allKm(){
        Double total = 0D;
        for (Ruta ruta : lista){
            if (ruta.isHecha()){
                total += ruta.getKm();
            }
        }
        return total;
    }

    public Ruta markCompleted(Long id){
        for (int i = 0; i < lista.size(); i++){
            if (lista.get(i).getId().equals(id)){
                lista.get(i).setHecha(true);
                return lista.get(i);
            }
        }
        return null;
    }

    public Ruta delete(Ruta ruta){
        for (int i = 0; i < lista.size(); i++){
            if (lista.get(i).getId().equals(ruta.getId())){
                lista.remove(ruta);
                return ruta;

            }
        }
        return null;
    }

    public boolean existeNombre(Ruta ruta){
        for (Ruta r : lista){
            if (r.getNombre().equals(ruta.getNombre())){
                if (!r.getId().equals(ruta.getId())){
                    return true;
                }
            }
        }
        return false;
    }

}
