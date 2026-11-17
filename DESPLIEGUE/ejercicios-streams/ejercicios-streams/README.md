# ejercicios-streams

Práctica de Streams sobre una colección de cursos.

**Material de ampliación opcional · Fuera de examen**

Completa los once métodos de la clase `Main` utilizando Streams. La clase `Curso`, los datos y el código que muestra los resultados ya están preparados.

## Preparación

Abre la carpeta `ejercicios-streams` desde tu IDE y selecciona el **JDK 25** como SDK del proyecto. 

Deja que el IDE cargue la configuración y las dependencias de los tests.

## Qué debes completar

Trabaja en `src/main/java/dwes/streams/Main.java`. 

Implementa `ejercicio01` hasta `ejercicio11`, sin cambiar sus nombres, parámetros ni tipos de retorno. Añade los imports que necesites.

Cada método recibe la lista de cursos que debe consultar y **devuelve su resultado**. El método `main` ya se encarga de mostrarlo. 

Los resultados provisionales (`0`, listas vacías, etc.) permiten compilar y ejecutar el proyecto desde el principio deberás sustituirlos por tus streams().

**Los once tests fallan inicialmente**: esto es lo esperado. Conforme resuelvas cada apartado, su test pasará a verde. Cada apartado tiene un test, aunque ese test comprueba varios casos.

| Método | Consulta | Qué devuelve |
| --- | --- | --- |
| `ejercicio01` | Cantidad de cursos de más de 5 horas | `long` |
| `ejercicio02` | Cantidad de cursos de menos de 2 horas | `long` |
| `ejercicio03` | Títulos de cursos con más de 50 vídeos | `List<String>` |
| `ejercicio04` | Títulos de los tres cursos de mayor duración, de mayor a menor | `List<String>` |
| `ejercicio05` | Duración total de los cursos | `double` |
| `ejercicio06` | Cursos que superan la duración media | `List<Curso>` |
| `ejercicio07` | Duraciones de cursos con menos de 500 alumnos | `List<Float>` |
| `ejercicio08` | Curso de mayor duración, si existe | `Optional<Curso>` |
| `ejercicio09` | Todos los títulos, sin repetidos y en orden alfabético descendente (de la Z a la A) | `List<String>` |
| `ejercicio10` | Títulos de cursos de más de 5 horas y al menos 400 alumnos, por alumnos descendente y título ascendente como desempate | `List<String>` |
| `ejercicio11` | Número de cursos de cada categoría de duración | `Map<String, Long>` |

En el apartado 11, las categorías son `"Corto"` para duraciones menores de 5 horas y `"Largo"` para duraciones de 5 horas o más. El mapa solo debe incluir categorías que tengan cursos; si no hay cursos, estará vacío.

## Ejecutar la autocorrección

Abre `src/test/java/dwes/streams/MainTest.java` y ejecuta la clase `MainTest` desde tu IDE utilizando la opción **Run / Ejecutar** junto al nombre de la clase. Se comprobarán los once apartados.

También puedes ejecutar un único test con la opción **Run / Ejecutar** situada junto a su método: `ejercicio01`, `ejercicio02`, etc.

Lee el mensaje del test que falla: muestra qué se esperaba y qué ha devuelto tu método. Los tests en rojo indican que todavía hay resultados por corregir. Si aparece un error de compilación, corrígelo primero; los tests solo pueden ejecutarse cuando el código compila.

## Ver los resultados en consola

Ejecuta la clase `Main` desde tu IDE. No es necesario modificar el método `main` para mostrar los resultados de los apartados.

## Condiciones

- Implementa las consultas utilizando Streams, sin bucles.
- Utiliza la lista recibida como parámetro. No crees dentro del método otra lista con los datos de ejemplo.
- No modifiques la lista de entrada ni sus objetos.
- En los apartados 3, 6 y 7 conserva el orden de la lista recibida.
- En el apartado 4 ordena antes de tomar los tres primeros. Si hay menos de tres, devuelve los disponibles; el orden entre duraciones iguales es libre.
- En el apartado 6 calcula la media una sola vez. Si la entrada está vacía, devuelve una lista vacía.
- En el apartado 8 devuelve el objeto original dentro de un `Optional`. Si hay varios máximos, basta con devolver uno.
- En el apartado 9 elimina los títulos repetidos y ordena los títulos en orden alfabético descendente (de la Z a la A). Utiliza el orden natural de `String` en sentido inverso.
- En los resultados de tipo lista, devuelve una lista vacía cuando no haya coincidencias. No devuelvas `null`.
- Una colección vacía tiene cero cursos y una duración total de `0.0`.
- No cambies los tests para conseguir que pasen.

Los tests comprueban los datos iniciales y otros casos con límites, empates y colecciones vacías. **Validan resultados; el uso de Streams se revisa leyendo tu código.** No tienes que escribir ni modificar los tests para hacer esta práctica.

## Archivos del proyecto

| Archivo | Función |
| --- | --- |
| `src/main/java/dwes/streams/Curso.java` | Clase proporcionada en el enunciado |
| `src/main/java/dwes/streams/DatosCursos.java` | Crea la colección inicial |
| `src/main/java/dwes/streams/Main.java` | Contiene el programa y los once métodos que debes completar |
| `src/test/java/dwes/streams/MainTest.java` | Autocorrección con JUnit |
| `pom.xml` | Configuración del proyecto para Java 25 y dependencias de los tests |


