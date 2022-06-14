package de.neuefische.backend.service;

import de.neuefische.backend.model.NasaPicture;
import de.neuefische.backend.repository.FavouritesRepository;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;


class APIServiceTest {
    private final FavouritesRepository favouritesRepository = mock(FavouritesRepository.class);
    private final APIService apiService = mock(APIService.class);



    @Test
    void checkIf_apiKey_isValid(){
        //GIVEN

        //WHEN

        //THEN
    }

    @Test
    void postPictureInFavourites(){
        //GIVEN

        //WHEN

        //THEN
    }

    @Test
    void deletePictureById_ifIdIsValid(){
        //GIVEN

        //WHEN


        //THEN
    }
}