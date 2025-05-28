package org.example.backendp2p4.dto;

import java.util.List;

public class MedicoCardDTO {
    private Integer id;
    private String nombre;
    private String especialidad;
    private String ciudad;
    private String instalacion;
    private List<org.example.backendp2p4.dto.HorarioDTO> horarios;
    private Integer costoConsulta;
    private Integer frecuencia;
    private String imagen;
    private String estado;


    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public String getNombre() { return nombre; }

    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getEspecialidad() { return especialidad; }

    public void setEspecialidad(String especialidad) { this.especialidad = especialidad;}

    public String getCiudad() { return ciudad;}

    public void setCiudad(String ciudad) { this.ciudad = ciudad;}

    public String getInstalacion() { return instalacion;}

    public void setInstalacion(String instalacion) { this.instalacion = instalacion;}

    public List<org.example.backendp2p4.dto.HorarioDTO> getHorarios() {return horarios;}

    public void setHorarios(List<org.example.backendp2p4.dto.HorarioDTO> horarios) {this.horarios = horarios;}

    public Integer getCostoConsulta() { return costoConsulta;}

    public void setCostoConsulta(Integer costoConsulta) { this.costoConsulta = costoConsulta;}

    public Integer getFrecuencia() { return frecuencia;}

    public void setFrecuencia(Integer frecuencia) { this.frecuencia = frecuencia;}

    public String getImagen() {return imagen;
    }

    public void setImagen(String imagen) {this.imagen = imagen;}

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
