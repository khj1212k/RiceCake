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


    
    //TODO 유저정보(id)에 맞는 스토리 리스트 반환
    @GetMapping("/{id}")
    public List<StoryList.Response> getStoryList(@PathVariable String id){
        List<StoryList> storyLists = storyListService.getStoryList(id);
        return StoryList.Response.toResponseList(storyLists);
    }

    //TODO 스토리 리스트 이름에 맞는 스토리들 반환
    // 이거는 스토리 컨트롤러에서 해야하는거같은데

    //TODO 스토리 리스트 추가
    @PostMapping("create")
    public List<StoryList.Response> createStoryList(@RequestBody @Valid StoryList.Request request){
        StoryList storyList = StoryList.Request.toEntity(request);
        User foundUser = userService.findUserById(request.getUser().getUserId());

        storyList.setUser(foundUser);
        storyListService.saveStoryList(storyList);
//        System.out.println(storyList); dto 를 만들어서 순환참조를 없앤다.(StoryList,User) toString울 고쳐서 해결
        List<StoryList> storyLists = storyListService.getStoryList(request.getUser().getUserId());
        return StoryList.Response.toResponseList(storyLists);
    }

    //TODO 스토리 리스트 삭제 (안에 있는 스토리도 다 삭제)
    @DeleteMapping
    public void deleteStoryList(@RequestParam("id") int id){
        storyListService.deleteStoryList(id);
    }

//    //TODO 스토리 리스트 타이틀/서브타이틀 수정
    @PutMapping("/titles")
    public void updateStoryList(@RequestBody StoryList.Request request) {
            StoryList foundStoryList = storyListService.findById(request.getStoryListId());
            foundStoryList.setStoryListTitle(request.getStoryListTitle());
            foundStoryList.setStoryListSubTitle(request.getStoryListSubTitle());
            storyListService.saveStoryList(foundStoryList); // 수정한 정보를 저장
    }

    //TODO 스토리 리스트 순서 수정
    @PutMapping("/orderNumber")
    public void updateOrderNumber(@RequestBody StoryList.Request request){
        StoryList foundStoryList = storyListService.findById(request.getStoryListId());
        foundStoryList.setOrderNumber(request.getOrderNumber());
        storyListService.saveStoryList(foundStoryList);

    }

}
