package de.neuefische.backend.controller;

import de.neuefische.backend.model.NasaPicture;
import de.neuefische.backend.service.APIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/")
public class NasaPictureController {

    private final APIService apiService;

    @Autowired
    public NasaPictureController(APIService apiService) {
        this.apiService = apiService;
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
    public List<NasaPicture> getArchive(){
        return apiService.getArchive();
    }

    @PostMapping("/favourites")
    public NasaPicture savePictureAsFavourite(@RequestBody NasaPicture nasaPicture){
        return apiService.saveNewPicture(nasaPicture);
    }

    @GetMapping("/favourites")
    public List<NasaPicture> getFavourites(){
        return apiService.getFavourites();
    }

    @DeleteMapping("{id}")
    public void deletePicture(@PathVariable String id){
        apiService.deletePicture(id);
    }
}
