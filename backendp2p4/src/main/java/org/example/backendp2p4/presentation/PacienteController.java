package org.example.backendp2p4.presentation;

import org.example.backendp2p4.logic.*;
import org.example.backendp2p4.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/pacientes")
public class PacienteController {

    @Autowired
    private Service service;

    @PostMapping("/confirmarcita")
    public ResponseEntity<Void> confirmarCita(
            @RequestBody Map<String, String> body,
            @RequestHeader("Authorization") String authHeader) {

        String token = authHeader.replace("Bearer ", "");
        String nombreUsuario = JwtUtil.extraerNombreDesdeToken(token);
        Usuario usuario = service.findUsuarioByNombre(nombreUsuario);

        if (!"PACIENTE".equals(usuario.getRol())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        Optional<Paciente> pacienteOpt = service.findPacienteByUsuario(usuario);
        Optional<Medico> medicoOpt = service.findMedicoById(Integer.parseInt(body.get("medicoId")));
        if (pacienteOpt.isEmpty() || medicoOpt.isEmpty()) return ResponseEntity.badRequest().build();

        LocalDate fecha = LocalDate.parse(body.get("fecha"), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        int hora = Integer.parseInt(body.get("hora").split(":")[0]);
        LocalDateTime fechaHora = fecha.atTime(hora, 0);

        Cita cita = new Cita();
        cita.setPaciente(pacienteOpt.get());
        cita.setDoctor(medicoOpt.get());
        cita.setFechaHora(fechaHora);
        cita.setEstado("PENDIENTE");

        service.saveCita(cita);
        return ResponseEntity.ok().build();
    }
}
