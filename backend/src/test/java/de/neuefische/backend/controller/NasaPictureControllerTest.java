package de.neuefische.backend.controller;

import de.neuefische.backend.TestWebClientConfig;
import de.neuefische.backend.model.NasaPicture;
import de.neuefische.backend.repository.FavouritesRepository;
import de.neuefische.backend.security.model.AppUser;
import de.neuefische.backend.security.repository.AppUserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.client.ClientResponse;
import reactor.core.publisher.Mono;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class NasaPictureControllerTest {

    private String jwtToken;

    @Autowired
    private TestWebClientConfig testWebClientConfig;

    @Autowired
    private WebTestClient testClient;

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private FavouritesRepository favouritesRepository;

    @LocalServerPort
    private int port;

    @BeforeEach
    public void cleanUp() {
        favouritesRepository.deleteAll();
        appUserRepository.deleteAll();
        jwtToken = generateJWTToken();

    }

    @Test
    void getPictureOfTheDay() {
        //GIVEN
        when(testWebClientConfig.exchangeFunction.exchange(any())).thenReturn(
                Mono.just(ClientResponse.create(HttpStatus.OK)
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .body("""
                                {
                                    "title": "A Digital Lunar Eclipse",
                                    "date": "2022-05-19",
                                    "explanation": "Description of Picture",
                                    "copyright": "Michael Cain",
                                    "url": "https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg",
                                    "hdurl": "https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg",
                                    "media_type": "image",
                                    "service_version": "v1"
                                }
                                """)
                        .build()));
        //WHEN
        NasaPicture actual = testClient.get()
                .uri("/api/picoftheday")
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(NasaPicture.class)
                .returnResult()
                .getResponseBody();

        //THEN
        NasaPicture expected = NasaPicture.builder()
                .title("A Digital Lunar Eclipse")
                .date("2022-05-19")
                .explanation("Description of Picture")
                .copyright("Michael Cain")
                .url("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg")
                .hdurl("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg")
                .mediaType("image")
                .serviceVersion("v1")
                .build();
        assertEquals(expected, actual);
    }

    @Test
    void getRandomPicture() {
        //GIVEN
        when(testWebClientConfig.exchangeFunction.exchange(any())).thenReturn(
                Mono.just(ClientResponse.create(HttpStatus.OK)
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .body("""
                                {
                                    "title": "A Digital Lunar Eclipse",
                                    "date": "2022-05-19",
                                    "explanation": "Description of Picture",
                                    "copyright": "Michael Cain",
                                    "url": "https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg",
                                    "hdurl": "https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg",
                                    "media_type": "image",
                                    "service_version": "v1"
                                }
                                """)
                        .build()));

        //WHEN
        NasaPicture actual = testClient.get()
                .uri("/api/randompicture")
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(NasaPicture.class)
                .returnResult()
                .getResponseBody();

        //THEN
        NasaPicture expected = NasaPicture.builder()
                .title("A Digital Lunar Eclipse")
                .date("2022-05-19")
                .explanation("Description of Picture")
                .copyright("Michael Cain")
                .url("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg")
                .hdurl("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg")
                .mediaType("image")
                .serviceVersion("v1")
                .build();
        assertEquals(expected, actual);
    }

    @Test
    void getArchive() {
        //GIVEN
        when(testWebClientConfig.exchangeFunction.exchange(any())).thenReturn(
                Mono.just(ClientResponse.create(HttpStatus.OK)
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .body("""
                                [
                                {
                                    "title": "A Digital Lunar Eclipse",
                                    "date": "2022-05-19",
                                    "explanation": "Description of Picture",
                                    "copyright": "Michael Cain",
                                    "url": "https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg",
                                    "hdurl": "https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg",
                                    "media_type": "image",
                                    "service_version": "v1"
                                }
                                ]
                                """)
                        .build()));

        //WHEN
        List<NasaPicture> actual = testClient.get()
                .uri("/api/archive")
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(NasaPicture.class)
                .returnResult()
                .getResponseBody();

        //THEN
        List<NasaPicture> expected = List.of(NasaPicture.builder()
                .title("A Digital Lunar Eclipse")
                .date("2022-05-19")
                .explanation("Description of Picture")
                .copyright("Michael Cain")
                .url("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg")
                .hdurl("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg")
                .mediaType("image")
                .serviceVersion("v1")
                .build()
        );
        assertEquals(expected, actual);

    }

    @Test
    void getFavourites_whenListIsEmpty() {
        //WHEN
        List<NasaPicture> actual = testClient.get()
                .uri("/api/favourites")
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(NasaPicture.class)
                .returnResult()
                .getResponseBody();

        //THEN
        List<NasaPicture> expected = List.of();
        assertEquals(expected, actual);

    }

    @Test
    void getFavourites_whenListIsFilled() {
        //GIVEN
        favouritesRepository.save(NasaPicture.builder()
                .title("A Digital Lunar Eclipse")
                .id("123456")
                .date("2022-05-19")
                .explanation("Description of Picture")
                .copyright("Michael Cain")
                .url("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg")
                .hdurl("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg")
                .mediaType("image")
                .serviceVersion("v1")
                .build()
        );

        //WHEN
        List<NasaPicture> actual = testClient.get()
                .uri("/api/favourites")
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(NasaPicture.class)
                .returnResult()
                .getResponseBody();

        //THEN
        List<NasaPicture> expected = List.of(NasaPicture.builder()
                .title("A Digital Lunar Eclipse")
                .id("123456")
                .date("2022-05-19")
                .explanation("Description of Picture")
                .copyright("Michael Cain")
                .url("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg")
                .hdurl("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg")
                .mediaType("image")
                .serviceVersion("v1")
                .build()
        );
        assertEquals(expected, actual);

    }

    @Test
    void postPictureInFavourites(){
        //GIVEN
        NasaPicture newPicture =  NasaPicture.builder()
                .title("A Digital Lunar Eclipse")
                .id("123456")
                .date("2022-05-19")
                .explanation("Description of Picture")
                .copyright("Michael Cain")
                .url("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg")
                .hdurl("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg")
                .mediaType("image")
                .serviceVersion("v1")
                .build();

        //WHEN
        List<NasaPicture> actual = testClient.post()
                .uri("/api/favourites")
                .headers(http -> http.setBearerAuth(jwtToken))
                .bodyValue(newPicture)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(NasaPicture.class)
                .returnResult()
                .getResponseBody();

        //THEN
        List<NasaPicture> expected = List.of(NasaPicture.builder()
                .title("A Digital Lunar Eclipse")
                .id("123456")
                .date("2022-05-19")
                .explanation("Description of Picture")
                .copyright("Michael Cain")
                .url("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg")
                .hdurl("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg")
                .mediaType("image")
                .serviceVersion("v1")
                .build()
        );
        assertEquals(expected, actual);
    }

    @Test
    void deletePictureById(){
        //GIVEN
        NasaPicture newPicture =  NasaPicture.builder()
                .title("A Digital Lunar Eclipse")
                .id("123456")
                .date("2022-05-19")
                .explanation("Description of Picture")
                .copyright("Michael Cain")
                .url("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s1024.jpg")
                .hdurl("https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg")
                .mediaType("image")
                .serviceVersion("v1")
                .build();

        NasaPicture addedPicture = testClient.post()
                .uri("http://localhost:" + port + "/api/favourites")
                .headers(http -> http.setBearerAuth(jwtToken))
                .bodyValue(newPicture)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(NasaPicture.class)
                .returnResult()
                .getResponseBody();
        //WHEN
        assertNotNull(addedPicture);
        testClient.delete()
                .uri("http://localhost:" + port + "/api/favourites/" + addedPicture.getId())
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()
        //THEN
                .expectStatus().is2xxSuccessful();
    }

    private String generateJWTToken() {
        String hashedPassword = passwordEncoder.encode("passwort");
        AppUser testUser = AppUser.builder()
                .username("testuser")
                .id("123")
                .password(hashedPassword)
                .build();
        appUserRepository.save(testUser);

        return testClient.post()
                .uri("/auth/login")
                .bodyValue(AppUser.builder()
                        .username("testuser")
                        .id("123")
                        .password("passwort")
                        .build())
                .exchange()
                .expectBody(String.class)
                .returnResult()
                .getResponseBody();
    }
}