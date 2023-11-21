package com.deepak.hiretalent.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;
import com.deepak.hiretalent.dao.SearchRepository;
import com.deepak.hiretalent.models.Post;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@Component
public class SearchRepositoryImplementation implements SearchRepository {
    @Autowired
    private MongoClient mongoClient;

    @Autowired
    private MongoConverter mongoConverter;

    public List<Post> searchByText(String text) {
        List<Post> searchPosts = new ArrayList<>();
        MongoDatabase database = mongoClient.getDatabase("telusko");
        MongoCollection<Document> collection = database.getCollection("hiretalent");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                new Document("text",
                        new Document("query", text)
                                .append("path", Arrays.asList("skills", "profile", "description")))),
                new Document("$sort",
                        new Document("experience", 1L)),
                new Document("$limit", 10L)));
        result.forEach(doc -> searchPosts.add(mongoConverter.read(Post.class, doc)));
        return searchPosts;
    }
}
