package de.neuefische.backend.service;

import com.cloudinary.Cloudinary;

import org.springframework.stereotype.Service;


import java.io.File;
import java.io.IOException;
import java.util.Map;
@Service
public class CloudinaryService {

   private final Cloudinary cloudinary = new Cloudinary();

   public String uploadImage(File image) throws IOException {
      Map response = cloudinary.uploader().upload(image, Map.of());
      return response.get("url").toString();
   }

}
