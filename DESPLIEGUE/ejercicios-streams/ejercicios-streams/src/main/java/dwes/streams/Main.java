package dwes.streams;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public class Main {

    public static void main(String[] args) {
        List<Curso> cursos = DatosCursos.crearCursos();

        System.out.println("1. Cantidad de cursos de más de 5 horas:");
        System.out.println(ejercicio01(cursos));

        System.out.println("\n2. Cantidad de cursos de menos de 2 horas:");
        System.out.println(ejercicio02(cursos));

        System.out.println("\n3. Títulos de cursos con más de 50 vídeos:");
        ejercicio03(cursos).forEach(System.out::println);

        System.out.println("\n4. Títulos de los tres cursos de mayor duración:");
        ejercicio04(cursos).forEach(System.out::println);

        System.out.println("\n5. Duración total en horas:");
        System.out.println(ejercicio05(cursos));

        System.out.println("\n6. Cursos que superan la duración media:");
        List<Curso> superioresALaMedia = ejercicio06(cursos);
        if (cursos.isEmpty()) {
            System.out.println("No hay cursos para calcular la media.");
        } else {
            superioresALaMedia.forEach(curso -> System.out.println(
                curso.getTitulo() + ": " + curso.getDuracion() + " horas"
            ));
        }

        System.out.println("\n7. Duraciones de cursos con menos de 500 alumnos:");
        ejercicio07(cursos).forEach(duracion ->
            System.out.println(duracion + " horas"));

        System.out.println("\n8. Curso de mayor duración:");
        Optional<Curso> masLargo = ejercicio08(cursos);
        if (masLargo.isPresent()) {
            Curso curso = masLargo.get();
            System.out.println(
                curso.getTitulo() + ": " + curso.getDuracion() + " horas"
            );
        } else {
            System.out.println("No se ha obtenido ningún curso.");
        }

        System.out.println("\n9. Títulos sin repetidos y en orden alfabético descendente:");
        System.out.println(ejercicio09(cursos));

        System.out.println("\n10. Cursos filtrados y ordenados por alumnos y título:");
        ejercicio10(cursos).forEach(System.out::println);

        System.out.println("\n11. Cantidad de cursos por categoría de duración:");
        System.out.println(ejercicio11(cursos));
    }

    /** 1. Devuelve la cantidad de cursos con una duración mayor de 5 horas. */
    public static long ejercicio01(List<Curso> cursos) {
        // TODO: sustituye el resultado provisional por tu solución con Streams.
        return 0L;
    }

    /** 2. Devuelve la cantidad de cursos con una duración menor de 2 horas. */
    public static long ejercicio02(List<Curso> cursos) {
        // TODO: implementa este apartado utilizando Streams.
        return 0L;
    }

    /** 3. Devuelve los títulos de cursos con más de 50 vídeos, en el orden de entrada. */
    public static List<String> ejercicio03(List<Curso> cursos) {
        // TODO: implementa este apartado utilizando Streams.
        return List.of();
    }

    /** 4. Devuelve los títulos de los tres cursos de mayor duración, de mayor a menor. */
    public static List<String> ejercicio04(List<Curso> cursos) {
        // TODO: si hay menos de tres cursos, devuelve los disponibles ordenados.
        return List.of();
    }

    /** 5. Devuelve la suma de las duraciones de todos los cursos. */
    public static double ejercicio05(List<Curso> cursos) {
        // TODO: implementa este apartado utilizando Streams.
        return 0.0;
    }

    /**
     * 6. Calcula la media y devuelve los cursos que la superan, en el orden de entrada.
     * Devuelve los objetos originales. Si no hay cursos, devuelve una lista vacía.
     */
    public static List<Curso> ejercicio06(List<Curso> cursos) {
        // TODO: calcula la media una vez y úsala después para filtrar los cursos.
        return List.of();
    }

    /**
     * 7. Devuelve las duraciones de cursos con menos de 500 alumnos, en el orden de entrada.
     * El getter de duración devuelve float; por eso la lista es de Float.
     */
    public static List<Float> ejercicio07(List<Curso> cursos) {
        // TODO: implementa este apartado utilizando Streams.
        return List.of();
    }

    /**
     * 8. Devuelve el curso original de mayor duración dentro de un Optional.
     * Sin cursos: Optional vacío. Si hay empate, cualquiera de los máximos es válido.
     */
    public static Optional<Curso> ejercicio08(List<Curso> cursos) {
        // TODO: implementa este apartado utilizando Streams.
        return Optional.empty();
    }

    /**
     * 9. Devuelve una lista con todos los títulos de los cursos, sin repetidos
     * y en orden alfabético descendente (de la Z a la A).
     */
    public static List<String> ejercicio09(List<Curso> cursos) {
        // TODO: implementa este apartado utilizando Streams.
        return List.of();
    }

    /**
     * 10. Devuelve los títulos de cursos de más de 5 horas y al menos 400 alumnos.
     * Ordena por alumnos descendente y, si empatan, por título ascendente.
     */
    public static List<String> ejercicio10(List<Curso> cursos) {
        // TODO: implementa este apartado utilizando Streams.
        return List.of();
    }

    /**
     * 11. Devuelve el número de cursos por categoría: Corto si duran menos de 5 horas;
     * Largo si duran 5 horas o más. Solo aparecen las categorías presentes.
     */
    public static Map<String, Long> ejercicio11(List<Curso> cursos) {
        // TODO: utiliza groupingBy() y counting().
        return Map.of();
    }
}
