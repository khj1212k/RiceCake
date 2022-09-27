package dev.RiceCake.controller;

import dev.RiceCake.entity.Story;
import dev.RiceCake.entity.StoryList;
import dev.RiceCake.entity.User;
import dev.RiceCake.repository.StoryListRepository;
import dev.RiceCake.repository.StoryRepository;
import dev.RiceCake.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("story")
public class StoryController {

    @Autowired
    private StoryRepository storyRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private  StoryListRepository storyListRepository;

    //TODO 유저정보와 스토리이름에 맞는 스토리 제목 및 내용 반환
    @GetMapping("/{id}")
    public List<Story.Response> getStory(@PathVariable int id){
        System.out.println(id);
        StoryList storyList = storyListRepository.findById(id).get();
        List<Story> Stroies =storyList.getStroies();
        return Story.Response.toResponseList(Stroies);
    }

    //TODO 스토리 정보 추가 (날짜 들어가고)
    @PostMapping
    public void createStory(@RequestBody Story.Request request){
        System.out.println(request);
        Story newStory = Story.Request.toEntity(request);
        storyRepository.save(newStory);
    }

    //TODO 스토리 정보 수정 (최종 수정일 날짜 들어가고)
    @PutMapping
    public void updateStroy(@RequestBody Story.Request request){
        final Optional<Story> foundStory = storyRepository.findById(request.getStoryId());
        System.out.println(request);
        System.out.println(foundStory);

        if (foundStory.isPresent()){
            Story story = foundStory.get();
            story.setStoryTitle(request.getStoryTitle());
            story.setStoryContents(request.getStoryContents());
            story.setStoryDate(request.getStoryDate());

            storyRepository.save(story);
        }

    }

    //TODO 스토리 정보 삭제
    @DeleteMapping
    public void deleteStory(@RequestParam int id){
        storyRepository.deleteById(id);
    }
}
