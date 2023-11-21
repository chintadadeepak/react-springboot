package com.deepak.hiretalent.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.deepak.hiretalent.dao.PostRepository;
import com.deepak.hiretalent.dao.SearchRepository;
import com.deepak.hiretalent.models.Post;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private SearchRepository searchRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post addPost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> searchByText(String text) {
        return searchRepository.searchByText(text);
    }
}
