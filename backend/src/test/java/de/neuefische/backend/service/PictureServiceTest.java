package de.neuefische.backend.service;

import de.neuefische.backend.dto.AddOwnPictureDto;
import de.neuefische.backend.model.NasaPicture;
import de.neuefische.backend.repository.PictureRepository;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class PictureServiceTest {

    private final PictureRepository pictureRepository = mock(PictureRepository.class);
    private final CloudinaryService cloudinaryService = mock(CloudinaryService.class);
    private final PictureService pictureService = new PictureService(pictureRepository, cloudinaryService);


    @Test
    void getMyPictures(){
        //GIVEN
        NasaPicture picture1 = NasaPicture.builder()
                .title("TestPicture")
                .date("2022-06-06")
                .copyright("TestUser1")
                .build();
        NasaPicture picture2 = NasaPicture.builder()
                .title("TestPicture2")
                .date("2022-06-07")
                .copyright("TestUser2")
                .build();
        when(pictureRepository.findAll()).thenReturn(List.of(picture1, picture2));

        //WHEN
        List<NasaPicture> actual = pictureService.getMyPictures();

        //THEN
        List<NasaPicture> expected = List.of(NasaPicture.builder()
                .title("TestPicture")
                .date("2022-06-06")
                .copyright("TestUser1")
                .build(),
                NasaPicture.builder()
                .title("TestPicture2")
                .date("2022-06-07")
                .copyright("TestUser2")
                .build());
        verify(pictureRepository).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addNewPicture() throws IOException {
        //GIVEN
        AddOwnPictureDto pictureDtoToAdd = AddOwnPictureDto.builder()
                .title("TestPicture")
                .date("2022-06-06")
                .explanation("Test Explanation")
                .copyright("TestUser")
                .build();
        NasaPicture newPicture = NasaPicture.builder()
                .title("TestPicture")
                .date("2022-06-06")
                .explanation("Test Explanation")
                .copyright("TestUser")
                .url("test.url")
                .build();
        NasaPicture addedPicture = NasaPicture.builder()
                .title("TestPicture")
                .date("2022-06-06")
                .explanation("Test Explanation")
                .copyright("TestUser")
                .url("test.url")
                .id("12345")
                .build();
        when(cloudinaryService.uploadImage(any())).thenReturn("test.url");
        when(pictureRepository.insert(newPicture)).thenReturn(addedPicture);
        //WHEN
        ClassLoader classLoader = this.getClass().getClassLoader();
        File picture = new File(classLoader.getResource("textpic.webp").getFile());
        NasaPicture actual = pictureService.addNewPicture(pictureDtoToAdd, picture);

        //THEN
        NasaPicture expected = NasaPicture.builder()
                .title("TestPicture")
                .date("2022-06-06")
                .explanation("Test Explanation")
                .copyright("TestUser")
                .url("test.url")
                .id("12345")
                .build();
        assertEquals(expected, actual);
    }


}
