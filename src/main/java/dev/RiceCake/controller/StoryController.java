package dev.RiceCake.controller;

import dev.RiceCake.entity.Story;
import dev.RiceCake.entity.StoryList;
import dev.RiceCake.service.StoryListService;
import dev.RiceCake.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("story")
@CrossOrigin(origins="*")
public class StoryController {

    @Autowired
    private StoryService storyService;

    @Autowired
    private StoryListService storyListService;

    @GetMapping("/{id}")
    public List<Story.Response> getStory(@PathVariable int id){
        StoryList storyList  = storyListService.findById(id);
        List<Story> Stroies =storyList.getStroies();
        return Story.Response.toResponseList(Stroies);
    }

    @PostMapping
    public void createStory(@RequestBody Story.Request request){
        storyService.saveStory(request);
    }

    @PutMapping
    public Story.Response updateStroy(@RequestBody Story.Request request){
        storyService.update(request);
        Story story = storyService.findStoryById(request.getStoryId());
        return Story.Response.toResponse(story);
    }

    @DeleteMapping
    public List<Story.Response> deleteStory(@RequestParam int id){
        int storyListId = storyService.findStoryById(id).getStoryList().getStoryListId();
        storyService.deleteStory(id);
        StoryList storyList  = storyListService.findById(storyListId);
        List<Story> Stroies =storyList.getStroies();
        return Story.Response.toResponseList(Stroies);
    }
}
