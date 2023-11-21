package com.deepak.hiretalent.models;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Document(collection = "hiretalent")
public class Post {
    private String profile;
    private String description;
    private int experience;
    private String[] skills;
}
