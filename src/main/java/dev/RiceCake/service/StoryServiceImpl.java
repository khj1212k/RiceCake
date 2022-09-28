package dev.RiceCake.service;

import dev.RiceCake.entity.Story;
import dev.RiceCake.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StoryServiceImpl implements StoryService {

    @Autowired
    private StoryRepository storyRepository;


    @Override
    public Story saveStory(Story.Request request) {
        Story newStory = Story.Request.toEntity(request);
        return storyRepository.save(newStory);
    }

    @Override
    public void deleteStory(int id) {
        storyRepository.deleteById(id);
    }

    @Override
    public Story findStoryById(int id) {
        return storyRepository.findById(id).get();
    }

    @Override
    public void update(Story.Request request) {
        final Optional<Story> foundStory = storyRepository.findById(request.getStoryId());
        System.out.println(request);
        System.out.println(foundStory);

        if (foundStory.isPresent()) {
            Story story = foundStory.get();
            story.setStoryTitle(request.getStoryTitle());
            story.setStoryContents(request.getStoryContents());
            story.setStoryDate(request.getStoryDate());

            storyRepository.save(story);
        }
    }
}