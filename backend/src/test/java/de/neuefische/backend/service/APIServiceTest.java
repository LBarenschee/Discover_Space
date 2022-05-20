package de.neuefische.backend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.web.reactive.function.client.ExchangeFunction;
import org.springframework.web.reactive.function.client.WebClient;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

class APIServiceTest {

    private APIService apiService;
    private final ExchangeFunction exchangeFunction = mock(ExchangeFunction.class);

    @BeforeEach
    void init() {
        WebClient webClient = WebClient.builder()
                .exchangeFunction(exchangeFunction)
                .build();

    }
}