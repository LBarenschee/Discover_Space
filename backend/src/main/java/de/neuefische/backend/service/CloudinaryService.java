package de.neuefische.backend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

public class CloudinaryService {

   private final Cloudinary cloudinary = new Cloudinary();

   public String uploadImage(MultipartFile image) throws IOException {
      Map response = cloudinary.uploader().upload(image, Map.of());
      return response.get("url").toString();
   }

}
