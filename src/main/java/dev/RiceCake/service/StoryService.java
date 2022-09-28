package dev.RiceCake.service;

import dev.RiceCake.entity.Story;

public interface StoryService {
    Story saveStory(Story.Request request);
    void deleteStory(int id);
    Story findStoryById(int id);
    void update(Story.Request request);


}
