package com.deepak.hiretalent.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.deepak.hiretalent.models.Post;

public interface PostRepository extends MongoRepository<Post, String> {

}
