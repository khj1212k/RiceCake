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
public class StoryController {

    @Autowired
    private StoryService storyService;

    @Autowired
    private StoryListService storyListService;

    //TODO 유저정보와 스토리이름에 맞는 스토리 제목 및 내용 반환
    @GetMapping("/{id}")
    public List<Story.Response> getStory(@PathVariable int id){
        StoryList storyList  = storyListService.findById(id);
        List<Story> Stroies =storyList.getStroies();
        return Story.Response.toResponseList(Stroies);
    }

    //TODO 스토리 정보 추가 (날짜 들어가고)
    @PostMapping
    public void createStory(@RequestBody Story.Request request){
        storyService.saveStory(request);
    }

    //TODO 스토리 정보 수정 (최종 수정일 날짜 들어가고)
    @PutMapping
    public void updateStroy(@RequestBody Story.Request request){
        storyService.update(request);
    }

    //TODO 스토리 정보 삭제
    @DeleteMapping
    public void deleteStory(@RequestParam int id){
        storyService.deleteStory(id);
    }
}
