package com.deepak.hiretalent.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.deepak.hiretalent.models.Post;

@Repository
public interface SearchRepository {
    List<Post> searchByText(String text);
}
