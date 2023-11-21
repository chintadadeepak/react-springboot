package com.deepak.hiretalent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.deepak.hiretalent.models.Post;
import com.deepak.hiretalent.service.PostService;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping("allPosts")
    @CrossOrigin
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @PostMapping("post")
    @CrossOrigin
    public Post addPost(@RequestBody Post post) {
        return postService.addPost(post);
    }

    @GetMapping("posts/{text}")
    @CrossOrigin
    public List<Post> search(@PathVariable String text) {
        return postService.searchByText(text);
    }
}
