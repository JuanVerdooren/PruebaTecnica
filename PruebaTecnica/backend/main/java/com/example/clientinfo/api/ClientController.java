package com.example.clientinfo.api;

import com.example.clientinfo.entity.Client;
import com.example.clientinfo.errors.ClientNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public ResponseEntity<Client> getClient(@RequestParam String type, @RequestParam String number) {
        if (type == null || number == null || type.isBlank() || number.isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        if (!type.equalsIgnoreCase("C") && !type.equalsIgnoreCase("P")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return clientService.getClientById(number)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new ClientNotFoundException("Cliente no encontrado."));
    }

    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        client.setId(UUID.randomUUID().toString());
        Client newClient = clientService.addClient(client);
        return ResponseEntity.status(HttpStatus.CREATED).body(newClient);
    }
}
