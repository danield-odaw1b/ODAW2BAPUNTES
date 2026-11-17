package dwes.streams;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class MainTest {

    private static final String JAVA = "Curso profesional de Java";
    private static final String PYTHON = "Curso profesional de Python";
    private static final String BASES_DATOS = "Curso profesional de Bases de datos";
    private static final String ANDROID = "Curso profesional de Android";
    private static final String ESCRITURA = "Curso profesional de Escritura";
    private static final double MARGEN = 0.000001;

    private List<Curso> cursos;
    private List<Curso> referenciasOriginales;
    private List<Curso> estadoOriginal;

    @BeforeEach
    void prepararDatos() {
        cursos = DatosCursos.crearCursos();
        referenciasOriginales = new ArrayList<>(cursos);
        estadoOriginal = new ArrayList<>();
        for (Curso curso : cursos) {
            estadoOriginal.add(new Curso(
                curso.getTitulo(), curso.getDuracion(),
                curso.getVideos(), curso.getAlumnos()
            ));
        }
    }

    @AfterEach
    void comprobarQueLaConsultaNoModificaLosDatos() {
        assertEquals(referenciasOriginales, cursos,
            "La consulta no debe añadir, eliminar, sustituir ni reordenar los cursos de entrada.");

        for (int i = 0; i < cursos.size(); i++) {
            Curso esperado = estadoOriginal.get(i);
            Curso actual = cursos.get(i);
            assertAll("La consulta no debe modificar los objetos Curso",
                () -> assertEquals(esperado.getTitulo(), actual.getTitulo()),
                () -> assertEquals(esperado.getDuracion(), actual.getDuracion(), MARGEN),
                () -> assertEquals(esperado.getVideos(), actual.getVideos()),
                () -> assertEquals(esperado.getAlumnos(), actual.getAlumnos())
            );
        }
    }

    @Test
    @Order(1)
    @DisplayName("01 · Cantidad de cursos de más de 5 horas")
    void ejercicio01() {
        List<Curso> otros = List.of(
            new Curso("Justo cinco horas", 5.0f, 10, 100),
            new Curso("Supera cinco", 5.25f, 10, 100),
            new Curso("Más corto", 2.0f, 10, 100)
        );

        assertAll(
            () -> assertEquals(3L, Main.ejercicio01(cursos),
                "Con los datos iniciales hay tres cursos de más de 5 horas."),
            () -> assertEquals(1L, Main.ejercicio01(otros),
                "Un curso de exactamente 5 horas no debe contarse."),
            () -> assertEquals(0L, Main.ejercicio01(List.of()),
                "Sin cursos, el recuento debe ser cero.")
        );
    }

    @Test
    @Order(2)
    @DisplayName("02 · Cantidad de cursos de menos de 2 horas")
    void ejercicio02() {
        List<Curso> otros = List.of(
            new Curso("Justo dos horas", 2.0f, 10, 100),
            new Curso("Breve", 1.75f, 10, 100),
            new Curso("Muy breve", 0.5f, 10, 100),
            new Curso("Más largo", 6.0f, 10, 100)
        );

        assertAll(
            () -> assertEquals(1L, Main.ejercicio02(cursos),
                "Con los datos iniciales hay un curso de menos de 2 horas."),
            () -> assertEquals(2L, Main.ejercicio02(otros),
                "Un curso de exactamente 2 horas no debe contarse."),
            () -> assertEquals(0L, Main.ejercicio02(List.of()),
                "Sin cursos, el recuento debe ser cero.")
        );
    }

    @Test
    @Order(3)
    @DisplayName("03 · Títulos de cursos con más de 50 vídeos")
    void ejercicio03() {
        List<Curso> otros = List.of(
            new Curso("Justo cincuenta", 3.0f, 50, 100),
            new Curso("Primero", 3.0f, 51, 100),
            new Curso("Segundo", 3.0f, 80, 100),
            new Curso("Pocos vídeos", 3.0f, 5, 100)
        );

        assertAll(
            () -> assertEquals(List.of(PYTHON, BASES_DATOS), Main.ejercicio03(cursos),
                "Devuelve los títulos de Python y bases de datos, en ese orden."),
            () -> assertEquals(List.of("Primero", "Segundo"), Main.ejercicio03(otros),
                "Excluye los 50 vídeos exactos y conserva el orden de las coincidencias."),
            () -> assertEquals(List.of(), Main.ejercicio03(List.of()),
                "Sin cursos, devuelve una lista vacía.")
        );
    }

    @Test
    @Order(4)
    @DisplayName("04 · Títulos de los tres cursos de mayor duración")
    void ejercicio04() {
        List<Curso> desordenados = List.of(
            new Curso("Seis", 6.0f, 10, 100),
            new Curso("Dos", 2.0f, 10, 100),
            new Curso("Ocho", 8.0f, 10, 100),
            new Curso("Cuatro", 4.0f, 10, 100)
        );
        List<Curso> soloDos = List.of(
            new Curso("Breve", 1.0f, 10, 100),
            new Curso("Largo", 4.0f, 10, 100)
        );

        assertAll(
            () -> assertEquals(List.of(PYTHON, ANDROID, JAVA), Main.ejercicio04(cursos),
                "Los tres mayores deben aparecer de mayor a menor duración."),
            () -> assertEquals(List.of("Ocho", "Seis", "Cuatro"),
                Main.ejercicio04(desordenados),
                "Ordena todos los cursos antes de tomar los tres primeros."),
            () -> assertEquals(List.of("Largo", "Breve"), Main.ejercicio04(soloDos),
                "Con menos de tres cursos, devuelve los disponibles ordenados."),
            () -> assertEquals(List.of(), Main.ejercicio04(List.of()),
                "Sin cursos, devuelve una lista vacía.")
        );
    }

    @Test
    @Order(5)
    @DisplayName("05 · Duración total")
    void ejercicio05() {
        List<Curso> otros = List.of(
            new Curso("Uno", 1.25f, 10, 100),
            new Curso("Dos", 2.75f, 10, 100),
            new Curso("Tres", 0.5f, 10, 100)
        );

        assertAll(
            () -> assertEquals(28.5, Main.ejercicio05(cursos), MARGEN,
                "La duración total de los cursos iniciales es 28.5 horas."),
            () -> assertEquals(4.5, Main.ejercicio05(otros), MARGEN,
                "Suma las duraciones sin eliminar sus decimales."),
            () -> assertEquals(0.0, Main.ejercicio05(List.of()), MARGEN,
                "Sin cursos, la duración total debe ser cero.")
        );
    }

    @Test
    @Order(6)
    @DisplayName("06 · Cursos que superan la duración media")
    void ejercicio06() {
        List<Curso> otros = List.of(
            new Curso("Uno", 1.0f, 10, 100),
            new Curso("Dos", 2.0f, 10, 100),
            new Curso("Tres", 3.0f, 10, 100)
        );
        List<Curso> iguales = List.of(
            new Curso("Primero", 4.0f, 10, 100),
            new Curso("Segundo", 4.0f, 10, 100)
        );
        List<Curso> soloUno = List.of(new Curso("Único", 7.0f, 10, 100));

        assertAll(
            () -> assertEquals(List.of(cursos.get(0), cursos.get(1), cursos.get(3)),
                Main.ejercicio06(cursos),
                "Devuelve los objetos originales de Java, Python y Android, en ese orden."),
            () -> assertEquals(List.of(otros.get(2)), Main.ejercicio06(otros),
                "La media debe calcularse a partir de la lista recibida; aquí es 2 horas."),
            () -> assertEquals(List.of(), Main.ejercicio06(iguales),
                "Igualar la media no significa superarla."),
            () -> assertEquals(List.of(), Main.ejercicio06(soloUno),
                "Un único curso coincide con su propia media."),
            () -> assertEquals(List.of(), Main.ejercicio06(List.of()),
                "Si no hay cursos, no intentes extraer una media de un optional vacío.")
        );
    }

    @Test
    @Order(7)
    @DisplayName("07 · Duraciones de cursos con menos de 500 alumnos")
    void ejercicio07() {
        List<Curso> otros = List.of(
            new Curso("Justo quinientos", 2.0f, 10, 500),
            new Curso("Primero", 9.0f, 10, 499),
            new Curso("Más alumnos", 5.0f, 10, 1000),
            new Curso("Segundo", 1.0f, 10, 0)
        );

        assertAll(
            () -> assertEquals(List.of(6.5f, 7.5f, 1.5f), Main.ejercicio07(cursos),
                "Devuelve las duraciones de Java, Android y escritura."),
            () -> assertEquals(List.of(9.0f, 1.0f), Main.ejercicio07(otros),
                "Excluye los 500 alumnos exactos y conserva el orden de entrada."),
            () -> assertEquals(List.of(), Main.ejercicio07(List.of()),
                "Sin cursos, devuelve una lista vacía.")
        );
    }

    @Test
    @Order(8)
    @DisplayName("08 · Objeto Curso de mayor duración")
    void ejercicio08() {
        List<Curso> otros = List.of(
            new Curso("Breve", 2.0f, 10, 100),
            new Curso("Mayor", 9.0f, 10, 100),
            new Curso("Intermedio", 4.0f, 10, 100)
        );
        List<Curso> empates = List.of(
            new Curso("Empate A", 4.0f, 10, 100),
            new Curso("Empate B", 4.0f, 10, 100),
            new Curso("Menor", 2.0f, 10, 100)
        );

        assertAll(
            () -> {
                Optional<Curso> resultado = Main.ejercicio08(cursos);
                assertNotNull(resultado, "Devuelve un Optional; no devuelvas null.");
                assertTrue(resultado.isPresent(), "Existe un curso de mayor duración.");
                assertSame(cursos.get(1), resultado.get(),
                    "Debes recuperar el objeto original de Python.");
            },
            () -> {
                Optional<Curso> resultado = Main.ejercicio08(otros);
                assertNotNull(resultado, "Devuelve un Optional; no devuelvas null.");
                assertTrue(resultado.isPresent(), "Existe un curso de mayor duración.");
                assertSame(otros.get(1), resultado.get(),
                    "Busca el máximo en la lista recibida.");
            },
            () -> {
                Optional<Curso> resultado = Main.ejercicio08(empates);
                assertNotNull(resultado, "Devuelve un Optional; no devuelvas null.");
                assertTrue(resultado.isPresent(), "Un empate no impide devolver un máximo.");
                assertTrue(resultado.get() == empates.get(0)
                    || resultado.get() == empates.get(1),
                    "Si hay empate, cualquiera de los objetos de duración máxima es válido.");
            },
            () -> assertEquals(Optional.empty(), Main.ejercicio08(List.of()),
                "Sin cursos, devuelve Optional.empty().")
        );
    }

    @Test
    @Order(9)
    @DisplayName("09 · Títulos sin repetidos y en orden alfabético descendente")
    void ejercicio09() {
        List<Curso> repetidosYDesordenados = List.of(
            new Curso("Beta", 1.0f, 10, 100),
            new Curso("Alfa", 2.0f, 20, 200),
            new Curso("Zeta", 3.0f, 30, 300),
            new Curso("Beta", 4.0f, 40, 400),
            new Curso("Gamma", 5.0f, 50, 500),
            new Curso("Alfa", 6.0f, 60, 600)
        );
        List<Curso> todosRepetidos = List.of(
            new Curso("Java", 1.0f, 10, 100),
            new Curso("Java", 2.0f, 20, 200),
            new Curso("Java", 3.0f, 30, 300)
        );
        List<Curso> soloUno = List.of(new Curso("Java", 1.0f, 10, 100));

        assertAll(
            () -> assertEquals(List.of(PYTHON, JAVA, ESCRITURA, BASES_DATOS, ANDROID),
                Main.ejercicio09(cursos),
                "Devuelve los títulos en orden alfabético descendente, de la Z a la A."),
            () -> assertEquals(List.of("Zeta", "Gamma", "Beta", "Alfa"),
                Main.ejercicio09(repetidosYDesordenados),
                "Elimina títulos repetidos aunque pertenezcan a cursos distintos y ordena de la Z a la A."),
            () -> assertEquals(List.of("Java"), Main.ejercicio09(todosRepetidos),
                "Si todos los títulos coinciden, debe quedar un único título."),
            () -> assertEquals(List.of("Java"), Main.ejercicio09(soloUno),
                "Una lista con un solo curso debe conservar su título."),
            () -> assertEquals(List.of(), Main.ejercicio09(List.of()),
                "Sin cursos, devuelve una lista vacía.")
        );
    }

    @Test
    @Order(10)
    @DisplayName("10 · Filtro combinado y ordenación con desempate")
    void ejercicio10() {
        List<Curso> otros = List.of(
            new Curso("Beta", 6.0f, 10, 400),
            new Curso("Alfa", 7.0f, 10, 400),
            new Curso("Gamma", 8.0f, 10, 700),
            new Curso("Justo cinco horas", 5.0f, 10, 900),
            new Curso("Pocos alumnos", 9.0f, 10, 399),
            new Curso("Duración insuficiente", 4.0f, 10, 1000)
        );

        assertAll(
            () -> assertEquals(List.of(PYTHON, ANDROID), Main.ejercicio10(cursos),
                "Con los datos iniciales deben aparecer Python y Android, en ese orden."),
            () -> assertEquals(List.of("Gamma", "Alfa", "Beta"), Main.ejercicio10(otros),
                "Exige ambas condiciones. Incluye 400 alumnos; desempata por título ascendente."),
            () -> assertEquals(List.of(), Main.ejercicio10(List.of()),
                "Sin cursos, devuelve una lista vacía.")
        );
    }

    @Test
    @Order(11)
    @DisplayName("11 · Agrupar por duración y contar")
    void ejercicio11() {
        List<Curso> otros = List.of(
            new Curso("Menos de cinco", 4.5f, 10, 100),
            new Curso("Justo cinco", 5.0f, 10, 100),
            new Curso("Más de cinco", 6.0f, 10, 100)
        );
        List<Curso> soloCortos = List.of(
            new Curso("Uno", 1.0f, 10, 100),
            new Curso("Tres", 3.0f, 10, 100)
        );
        List<Curso> soloLargos = List.of(
            new Curso("Cinco", 5.0f, 10, 100),
            new Curso("Siete", 7.0f, 10, 100)
        );

        assertAll(
            () -> assertEquals(Map.of("Corto", 2L, "Largo", 3L), Main.ejercicio11(cursos),
                "Los datos iniciales tienen dos cursos cortos y tres largos."),
            () -> assertEquals(Map.of("Corto", 1L, "Largo", 2L), Main.ejercicio11(otros),
                "Un curso de exactamente 5 horas pertenece a Largo."),
            () -> assertEquals(Map.of("Corto", 2L), Main.ejercicio11(soloCortos),
                "Solo incluye las categorías que tengan cursos."),
            () -> assertEquals(Map.of("Largo", 2L), Main.ejercicio11(soloLargos),
                "Solo incluye las categorías que tengan cursos."),
            () -> assertEquals(Map.of(), Main.ejercicio11(List.of()),
                "Sin cursos, devuelve un mapa vacío.")
        );
    }
}
