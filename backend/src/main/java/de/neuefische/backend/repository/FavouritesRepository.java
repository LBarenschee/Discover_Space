package de.neuefische.backend.repository;

import de.neuefische.backend.model.NasaPicture;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavouritesRepository extends MongoRepository<NasaPicture, String>{
    List<NasaPicture> findByDate(String date);
}
