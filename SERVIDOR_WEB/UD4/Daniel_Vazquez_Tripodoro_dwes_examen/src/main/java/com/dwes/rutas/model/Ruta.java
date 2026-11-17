package com.dwes.rutas.model;

import jakarta.validation.constraints.NotBlank;

/**
 * Clase del modelo de dominio.
 */
public class Ruta {

    private Long id;

    private String nombre;

    private Double km;

    private boolean hecha;

    public Ruta() {
    }

    public Ruta(Long id, String nombre, Double km, boolean hecha) {
        this.id = id;
        this.nombre = nombre;
        this.km = km;
        this.hecha = hecha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getKm() {
        return km;
    }

    public void setKm(Double km) {
        this.km = km;
    }

    public boolean isHecha() {
        return hecha;
    }

    public void setHecha(boolean hecha) {
        this.hecha = hecha;
    }
}
