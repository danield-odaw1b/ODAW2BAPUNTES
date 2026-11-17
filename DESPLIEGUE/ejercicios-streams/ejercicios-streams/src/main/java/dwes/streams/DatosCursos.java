package dwes.streams;

import java.util.ArrayList;
import java.util.List;

public class DatosCursos {

    // Cada llamada crea una lista nueva y objetos nuevos.
    public static List<Curso> crearCursos() {
        List<Curso> cursos = new ArrayList<>();
        cursos.add(new Curso("Curso profesional de Java", 6.5f, 50, 200));
        cursos.add(new Curso("Curso profesional de Python", 8.5f, 60, 800));
        cursos.add(new Curso("Curso profesional de Bases de datos", 4.5f, 70, 700));
        cursos.add(new Curso("Curso profesional de Android", 7.5f, 10, 400));
        cursos.add(new Curso("Curso profesional de Escritura", 1.5f, 10, 300));
        return cursos;
    }
}
