package de.neuefische.backend.service;

import de.neuefische.backend.dto.AddOwnPictureDto;
import de.neuefische.backend.model.NasaPicture;
import de.neuefische.backend.repository.FavouritesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


import java.time.LocalDate;

import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAmount;
import java.util.List;

@Service
public class APIService {

    private final WebClient webClient;
    private final FavouritesRepository pictureRepository;


    @Autowired
    public APIService(WebClient webClient, FavouritesRepository pictureRepository){
        this.webClient = webClient;

        this.pictureRepository = pictureRepository;
    }
    @Value("${neuefische.capstone.nasa.api.key}")
    private String API_KEY;


    public NasaPicture getPictureOfTheDay(){
        //API Call
        NasaPicture nasaPicture = webClient
                .get()
                .uri("/planetary/apod?api_key=" + API_KEY)
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .retrieve()
                .toEntity(NasaPicture.class)
                .block()
                .getBody();

        return nasaPicture;
    }

    public NasaPicture getRandomPicture() {
        List<NasaPicture> nasaPicture = webClient
                .get()
                .uri("/planetary/apod?api_key=" + API_KEY + "&count=1")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .retrieve()
                .toEntityList(NasaPicture.class)
                .block()
                .getBody();
        return nasaPicture.get(0);
    }

    public List<NasaPicture> getArchive(int pageNumber) {
        LocalDate endDate = LocalDate.now().minusDays(pageNumber * 30L - 30L);
        LocalDate startDate = endDate.minusDays(pageNumber * 30L - 29L);
        List<NasaPicture> nasaPictures = webClient
                .get()
                .uri("/planetary/apod?api_key=" + API_KEY
                                                    + "&start_date=" + startDate
                                                    + "&end_date=" + endDate)
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .retrieve()
                .toEntityList(NasaPicture.class)
                .block()
                .getBody();
        return nasaPictures;
    }

    public NasaPicture saveNewPicture(NasaPicture nasaPicture) {
        return pictureRepository.insert(nasaPicture);
    }

    public List<NasaPicture> getFavourites() {
        return pictureRepository.findAll();
    }

    public void deletePicture(String id) {
        pictureRepository.deleteById(id);
    }

    public NasaPicture addNewPicture(AddOwnPictureDto ownPictureDto) {

        if(ownPictureDto.getTitle() == null){
            throw new IllegalArgumentException("Title of picture was null");

        }
        NasaPicture newPicture = NasaPicture.builder()
                .title(ownPictureDto.getTitle())
                .date(ownPictureDto.getDate())
                .explanation(ownPictureDto.getExplanation())
                .copyright(ownPictureDto.getCopyright())
                .build();
        return pictureRepository.insert(newPicture);
    }
}
