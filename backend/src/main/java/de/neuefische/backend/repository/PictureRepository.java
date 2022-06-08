package de.neuefische.backend.repository;

import de.neuefische.backend.model.NasaPicture;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureRepository extends MongoRepository<NasaPicture, String> {

}
