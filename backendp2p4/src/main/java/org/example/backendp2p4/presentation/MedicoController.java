package org.example.backendp2p4.presentation;

import org.example.backendp2p4.dto.MedicoCardDTO;
import org.example.backendp2p4.logic.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicos")
public class MedicoController {

    private final Service service;

    public MedicoController(Service service) {
        this.service = service;
    }

    @GetMapping
    public List<MedicoCardDTO> buscarMedicos(
            @RequestParam(required = false) String especialidad,
            @RequestParam(required = false) String ciudad
    ) {
        if ((especialidad == null || especialidad.isBlank()) &&
                (ciudad == null || ciudad.isBlank())) {
            return service.getMedicosConHorarios();
        }
        return service.buscarMedicos(especialidad, ciudad);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MedicoCardDTO> obtenerMedico(@PathVariable Integer id) {
        return service.findMedicoById(id)
                .map(service::convertirAMedicoPerfilDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
