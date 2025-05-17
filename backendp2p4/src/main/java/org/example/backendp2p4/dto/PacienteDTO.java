package org.example.backendp2p4.dto;

import org.example.backendp2p4.logic.Paciente;

public class PacienteDTO {
    private Integer id;
    private String nombre;
    private String email;

    public PacienteDTO(Paciente paciente) {
        this.id = paciente.getId();
        this.nombre = paciente.getUsuario().getNombre();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) { this.id = id;}

    public String getNombre() {return nombre;}

    public void setNombre(String nombre) {this.nombre = nombre;}

}