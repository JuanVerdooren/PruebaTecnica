package com.example.clientinfo.api;

import com.example.clientinfo.entity.Client;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    private final List<Client> clients = new ArrayList<>();

    public List<Client> getAllClients() {
        return clients;
    }

    public Optional<Client> getClientById(String id) {
        return clients.stream().filter(client -> client.getId().equals(id)).findFirst();
    }

    public Client addClient(Client client) {
        clients.add(client);
        return client;
    }
}
