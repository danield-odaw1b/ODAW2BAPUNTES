package com.dwes.rutas.controller;

import com.dwes.rutas.model.Ruta;
import com.dwes.rutas.service.RutaService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingErrorProcessor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.FlashMap;
import org.springframework.web.servlet.FlashMapManager;

@Controller
@RequestMapping("/rutas")
public class RutaController {
    private RutaService rutaService;

    public RutaController(RutaService rutaService) {this.rutaService = rutaService;}

    @GetMapping()
    public String mostrarListado(@RequestParam(required = false)String filtroNombre, Model model){
        model.addAttribute("kmTotales", rutaService.obtenerKmTotales());
        model.addAttribute("lista", rutaService.rutasConNombre(filtroNombre));
        model.addAttribute("kmTotal", "Kilómetros hechos: " + rutaService.obtenerKmTotales() + " Km");
        return "ruta-listado";
    }

    @GetMapping("/nueva")
    public String nuevaRuta(){
        return "ruta-form";
    }
    @PostMapping("/nueva")
    public String guardarNueva(@RequestParam("nombre") String nombre, @RequestParam("km")Double km, Model model){
        try {
            Ruta rutaNueva = new Ruta();
            rutaNueva.setNombre(nombre);
            rutaNueva.setKm(km);
            rutaService.crearRuta(rutaNueva);
            return "redirect:/rutas";
        } catch (Exception e) {
            model.addAttribute("error", e.getMessage());
            return "ruta-form";
        }

    }

    @PostMapping("/{id}/completar")
    public String marcarHecha(@PathVariable("id")Long id, Model model){
        try {
            rutaService.completarRuta(id);
            return "redirect:/rutas";
        } catch (Exception e) {
            model.addAttribute("mensaje", e.getMessage());
            model.addAttribute("lista", rutaService.obtenerRutas());
            model.addAttribute("kmTotal","Kilómetros hechos: " + rutaService.obtenerKmTotales() + " Km");
            return "ruta-listado";
        }
    }

    @GetMapping("/{id}/editar")
    public String editarRuta(@PathVariable("id")Long id, Model model){
        model.addAttribute("nombre", rutaService.obtenerPorId(id).getNombre());
        model.addAttribute("km", rutaService.obtenerPorId(id).getKm());
        return "ruta-form";
    }
    @PostMapping("/{id}/editar")
    public String guardarCambiosRuta(@PathVariable("id")Long id, @RequestParam("nombre")String nombre, @RequestParam("km")Double km, Model model){
        try {
            Ruta rutaEd = rutaService.obtenerPorId(id);
            rutaEd.setNombre(nombre);
            rutaEd.setKm(km);
            rutaService.crearRuta(rutaEd);
            return "redirect:/rutas";
        } catch (Exception e){
            model.addAttribute("error", e.getMessage());
            return "lista-form";
        }
    }

    @PostMapping("/{id}/eliminar")
    public String borrarRuta(@PathVariable("id")Long id, Model model){
        try {
            rutaService.borrarRuta(rutaService.obtenerPorId(id));
            return "redirect:/rutas";
        } catch (Exception e){
            model.addAttribute("lista", rutaService.obtenerRutas());
            model.addAttribute("mensaje", e.getMessage());
            return "ruta-listado";
        }
    }

}
