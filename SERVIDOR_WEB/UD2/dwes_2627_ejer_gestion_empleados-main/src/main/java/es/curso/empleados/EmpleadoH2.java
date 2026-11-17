package es.curso.empleados;

import es.curso.empleados.Empleado;
import org.h2.command.Prepared;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

public class EmpleadoH2 {


    public List<Empleado> listarTodos() throws SQLException {
        // TODO Recuperar todos los empleados ordenados por id.
        List<Empleado> empleados = new ArrayList<>();

        String sql = "SELECT * FROM empleados";

        try (Connection connection = ConexionBD.obtenerConexion();
            PreparedStatement consulta = connection.prepareStatement(sql);
            ResultSet result = consulta.executeQuery()) {

            while (result.next()){
                Empleado empleado = new Empleado(
                        result.getInt("id"),
                        result.getString("nombre_completo"),
                        result.getDouble("salario")
                );
                empleados.add(empleado);
            }

        }

        return empleados;

    }


    public boolean insertar(Empleado empleado) throws SQLException {
        // TODO Insertar el empleado recibido y devolver si se añadió una fila.
        String sql = "INSERT INTO empleados (id, nombre_completo, salario) "
                + "VALUES (?, ?, ?)";

        try(Connection connection = ConexionBD.obtenerConexion();
            PreparedStatement consulta = connection.prepareStatement(sql)){
            consulta.setInt(1, empleado.getId());
            consulta.setString(2, empleado.getNombreCompleto());
            consulta.setDouble(3, empleado.getSalario());

            int filas = consulta.executeUpdate();

            return filas > 0;
        }
    }


    public boolean eliminar(int id) throws SQLException {
        // TODO Eliminar el empleado con ese id y devolver si se eliminó una fila.
        String sql = "DELETE FROM empleados WHERE id = ?";

        try (Connection connection = ConexionBD.obtenerConexion();
             PreparedStatement consulta = connection.prepareStatement(sql)) {
            consulta.setInt(1, id);

            int filas = consulta.executeUpdate();

            return filas > 0;
        }
    }


    public boolean modificar(double salario, int id) throws SQLException {
        // TODO Actualizar salario a partir del id y devolver si se modificó una fila.
       String sql = "UPDATE empleado SET salario = ? WHERE id = ?";

        try (Connection connection = ConexionBD.obtenerConexion();
        PreparedStatement consulta = connection.prepareStatement(sql)){

            consulta.setDouble(1, salario);
            consulta.setInt(2, id);

            int filas = consulta.executeUpdate();

            return filas > 0;
        }
    }


    public List<Empleado> buscarPorSalario(double salarioMinimo, double salarioMaximo)
            throws SQLException {
        // TODO Recuperar los empleados cuyo salario esté en el intervalo, incluidos los límites.
        String sql = "SELECT * FROM empleados "
                + "WHERE salario BETWEEN ? AND ?";

        List<Empleado> empleados = new ArrayList<>();

        try (Connection connection = ConexionBD.obtenerConexion();
        PreparedStatement consulta = connection.prepareStatement(sql)) {
            consulta.setDouble(1, salarioMinimo);
            consulta.setDouble(2, salarioMaximo);
            try (ResultSet result = consulta.executeQuery()) {
                while (result.next()) {
                    Empleado empleado = new Empleado(
                            result.getInt("id"),
                            result.getString("nombre_completo"),
                            result.getDouble("salario")
                    );
                    empleados.add(empleado);
                }
            }
        }
        return empleados;
    }

    private UnsupportedOperationException pendiente(String metodo) {
        return new UnsupportedOperationException(
                "Método " + metodo + " pendiente de implementar"
        );
    }
}
