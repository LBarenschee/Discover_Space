package de.neuefische.backend.controller;

import de.neuefische.backend.dto.AddOwnPictureDto;
import de.neuefische.backend.model.NasaPicture;
import de.neuefische.backend.service.APIService;
import de.neuefische.backend.service.PictureService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("/")
public class NasaPictureController {

    private final APIService apiService;
    private final PictureService pictureService;

    @Autowired
    public NasaPictureController(APIService apiService, PictureService pictureService) {
        this.apiService = apiService;
        this.pictureService = pictureService;
    }

    @GetMapping("/picoftheday")
    public NasaPicture getPictureOfTheDay (){
        return apiService.getPictureOfTheDay();
    }

    @GetMapping("/randompicture")
    public NasaPicture getRandomPicture(){
        return apiService.getRandomPicture();
    }

    @GetMapping("/archive")
    public List<NasaPicture> getArchive(@RequestParam(required = false, defaultValue = "1") int pageNumber){
        return apiService.getArchive(pageNumber);
    }

    @GetMapping("/favourites")
    public List<NasaPicture> getFavourites(){
        return apiService.getFavourites();
    }

    @PostMapping("/favourites")
    public NasaPicture savePictureAsFavourite(@RequestBody NasaPicture nasaPicture){
        return apiService.saveNewPicture(nasaPicture);
    }
    @DeleteMapping("/favourites/{id}")
    public void deletePicture(@PathVariable String id){
        apiService.deletePicture(id);
    }

    @PostMapping("/mypictures")
    public NasaPicture postNewPicture(@RequestPart(value = "picturedto") AddOwnPictureDto ownPictureDto,
                                      @RequestPart(value = "file") MultipartFile image) throws IOException {
        File fileToUpload = File.createTempFile("userImageFileName", ".tmp");
        image.transferTo(fileToUpload);
        return pictureService.addNewPicture(ownPictureDto, fileToUpload);
    }

    @GetMapping("/mypictures")
    public List<NasaPicture> getMyPictures(){
        return pictureService.getMyPictures();
    }
}
