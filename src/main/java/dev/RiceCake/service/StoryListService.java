package dev.RiceCake.service;

import dev.RiceCake.entity.StoryList;

import java.util.List;

public interface StoryListService {
    List<StoryList> getStoryList(String id);

    StoryList saveStoryList(StoryList storyList);

    void deleteStoryList(int id);
    StoryList findByOrderNumber(StoryList.Request request);
    StoryList findById(int id);


}
