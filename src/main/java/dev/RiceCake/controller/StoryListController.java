package dev.RiceCake.controller;

import dev.RiceCake.entity.StoryList;
import dev.RiceCake.entity.User;
import dev.RiceCake.service.StoryListService;
import dev.RiceCake.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("storyList")
@CrossOrigin(origins="*")
public class StoryListController {

@Autowired
private StoryListService storyListService;

@Autowired
private UserService userService;


    
    @GetMapping("/{id}")
    public List<StoryList.Response> getStoryList(@PathVariable String id){
        List<StoryList> storyLists = storyListService.getStoryList(id);
        return StoryList.Response.toResponseList(storyLists);
    }

    @PostMapping("create")
    public List<StoryList.Response> createStoryList(@RequestBody @Valid StoryList.Request request){
        StoryList storyList = StoryList.Request.toEntity(request);
        User foundUser = userService.findUserById(request.getUser().getUserId());

        storyList.setUser(foundUser);
        storyListService.saveStoryList(storyList);
        List<StoryList> storyLists = storyListService.getStoryList(request.getUser().getUserId());
        return StoryList.Response.toResponseList(storyLists);
    }

    @DeleteMapping
    public  List<StoryList.Response> deleteStoryList(@RequestParam("id") int id){
        String userId = storyListService.findById(id).getUser().getUserId();
        storyListService.deleteStoryList(id);
        List<StoryList> storyLists = storyListService.getStoryList(userId);
        return StoryList.Response.toResponseList(storyLists);
    }

    @PutMapping("/titles")
    public void updateStoryList(@RequestBody StoryList.Request request) {
            StoryList foundStoryList = storyListService.findById(request.getStoryListId());
            foundStoryList.setStoryListTitle(request.getStoryListTitle());
            foundStoryList.setStoryListSubTitle(request.getStoryListSubTitle());
            storyListService.saveStoryList(foundStoryList); // 수정한 정보를 저장
    }

    @PutMapping("/orderNumber")
    public void updateOrderNumber(@RequestBody StoryList.Request request){
        StoryList foundStoryList = storyListService.findById(request.getStoryListId());
        foundStoryList.setOrderNumber(request.getOrderNumber());
        storyListService.saveStoryList(foundStoryList);

    }

}
