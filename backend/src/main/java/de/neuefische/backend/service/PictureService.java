package de.neuefische.backend.service;

import de.neuefische.backend.dto.AddOwnPictureDto;
import de.neuefische.backend.model.NasaPicture;
import de.neuefische.backend.repository.PictureRepository;
import org.springframework.stereotype.Service;


import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class PictureService {

    private final PictureRepository pictureRepository;
    private final CloudinaryService cloudinaryService;

    public PictureService(PictureRepository pictureRepository, CloudinaryService cloudinaryService) {
        this.pictureRepository = pictureRepository;
        this.cloudinaryService = cloudinaryService;
    }

    public NasaPicture addNewPicture(AddOwnPictureDto ownPictureDto, File image) throws IOException {

        if(ownPictureDto.getTitle() == null){
            throw new IllegalArgumentException("Title of picture was null");

        }
        String url = cloudinaryService.uploadImage(image);
        NasaPicture newPicture = NasaPicture.builder()
                .title(ownPictureDto.getTitle())
                .date(ownPictureDto.getDate())
                .explanation(ownPictureDto.getExplanation())
                .copyright(ownPictureDto.getCopyright())
                .url(url)
                .build();
        return pictureRepository.insert(newPicture);
    }

    public List<NasaPicture> getMyPictures() {
        return pictureRepository.findAll();
    }
}
