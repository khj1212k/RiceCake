package dev.RiceCake.controller;

import dev.RiceCake.entity.StoryList;
import dev.RiceCake.entity.User;
import dev.RiceCake.repository.StoryListRepository;
import dev.RiceCake.repository.UserRepository;
import dev.RiceCake.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("storyList")
public class StoryListController {

    @Autowired
    private StoryListRepository storyListRepository;

    @Autowired
    private UserRepository userRepository;
    private UserService userService;
    
    //TODO 유저정보(id)에 맞는 스토리 리스트 반환
    @GetMapping("/{id}")
    public List<StoryList.Response> getStoryList(@PathVariable String id){
        System.out.println(id);
        User user = userRepository.findById(id).get();
        List<StoryList> storyLists =user.getStoryLists();
        return StoryList.Response.toResponseList(storyLists);
    }

    //TODO 스토리 리스트 이름에 맞는 스토리들 반환
    // 이거는 스토리 컨트롤러에서 해야하는거같은데

    //TODO 스토리 리스트 추가
    @PostMapping("create")
    public void createStoryList(@RequestBody @Valid StoryList.Request request){
        StoryList storyList = StoryList.Request.toEntity(request);
        User foundUser = userRepository.findById(request.getUser().getUserId()).get();
        storyList.setUser(foundUser);
        storyListRepository.save(storyList);


//        System.out.println(storyList); dto 를 만들어서 순환참조를 없앤다.(StoryList,User) toString울 고쳐서 해결
    }

    //TODO 스토리 리스트 삭제 (안에 있는 스토리도 다 삭제)
    @DeleteMapping
    public void deleteStoryList(@RequestParam("id") int id){
        storyListRepository.deleteById(id);
    }

//    //TODO 스토리 리스트 타이틀/서브타이틀 수정
    @PutMapping("/titles")
    public void updateStoryList(@RequestBody StoryList.Request request) {
        final StoryList foundStoryList = storyListRepository.findByOrderNumber(request.getOrderNumber());
            foundStoryList.setStoryListTitle(request.getStoryListTitle());
            foundStoryList.setStoryListSubTitle(request.getStoryListSubTitle());

            storyListRepository.save(foundStoryList); // 수정한 정보를 저장
    }

    //TODO 스토리 리스트 순서 수정
    @PutMapping("/orderNumber")
    public void updateOrderNumber(@RequestBody StoryList.Request request){
        final StoryList foundStoryList = storyListRepository.findById(request.getStoryListId()).get();
        System.out.println(foundStoryList);
        foundStoryList.setOrderNumber(request.getOrderNumber());
        storyListRepository.save(foundStoryList);

    }

}
