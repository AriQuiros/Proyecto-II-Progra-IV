package org.example.backendp2p4.presentation;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/medicos")
public class MedicoController {

    @GetMapping("/perfil")
    @PreAuthorize("hasAuthority('SCOPE_MEDICO')")
    public String getPerfilMedico() {
        return "Bienvenido al perfil del médico.";
    }
}
