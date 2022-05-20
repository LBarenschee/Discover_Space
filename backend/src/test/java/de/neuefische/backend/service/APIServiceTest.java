package de.neuefische.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.WebClientConfig;
import de.neuefische.backend.model.NasaPicture;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.ClientRequest;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.ExchangeFunction;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class APIServiceTest {

    private APIService apiService;
    private final ExchangeFunction exchangeFunction = mock(ExchangeFunction.class);

    @MockBean
    private WebClientConfig testWebClientConfig;

    @BeforeEach
    void setUp() {
        when(testWebClientConfig.getWebClient()).thenReturn(WebClient
                .builder()
                .exchangeFunction(exchangeFunction)
                .build());

        apiService = new APIService(testWebClientConfig);
    }

    @Test
    void getPictureOfTheDay() throws JsonProcessingException {
        //GIVEN
        NasaPicture nasaPicture = new NasaPicture();

        ObjectMapper objectMapper = new ObjectMapper();

        when(exchangeFunction.exchange(any(ClientRequest.class)))
                .thenReturn(Mono.just(ClientResponse
                        .create(HttpStatus.OK)
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .body(objectMapper.writeValueAsString(nasaPicture))
                        .build()));

    //WHEN
    NasaPicture actual = apiService.getPictureOfTheDay();

    //THEN
    NasaPicture expected = new NasaPicture();
    assertEquals(expected, actual);
    }

}