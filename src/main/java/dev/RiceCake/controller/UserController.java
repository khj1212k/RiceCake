package dev.RiceCake.controller;

import dev.RiceCake.entity.Diary;
import dev.RiceCake.entity.StoryList;
import dev.RiceCake.entity.User;
import dev.RiceCake.service.DiaryService;
import dev.RiceCake.service.StoryListService;
import dev.RiceCake.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private StoryListService storyListService;

    @Autowired
    private DiaryService diaryService;

    @PostMapping("find")
    public ResponseEntity<User.Response> findUser(@RequestBody User.Request request) {

        User user = userService.findUserById(request.getUserId());

        User.Response response = User.Response.toResponse(user);
        HttpStatus status = HttpStatus.OK;

        return ResponseEntity.status(status).body(response);
    }

    @PostMapping("find/password")
    public ResponseEntity<User.passwordResponse> findUserPassword(@RequestBody User.Request request) {

        User user = userService.findUserById(request.getUserId());

        User.passwordResponse response = User.passwordResponse.toResponse(user);
        HttpStatus status = HttpStatus.OK;

        return ResponseEntity.status(status).body(response);
    }

    @PostMapping("find/email")
    public ResponseEntity<List<User.Response>> findUserByEamil(@RequestBody User.Request request) {

        List<User> userList = userService.findUserByEmail(request.getEmail());

        List<User.Response> responseList = User.Response.toResponseList(userList);
        HttpStatus status = HttpStatus.OK;

        return ResponseEntity.status(status).body(responseList);
    }

    @PostMapping("auth/sign-in")
    public ResponseEntity<User.Response> signIn(@RequestBody User.Request request) {
        User user = userService.loginUser(request);

        User.Response response = User.Response.toResponse(user);
        HttpStatus status = HttpStatus.OK;
        System.out.println(response);
        return ResponseEntity.status(status).body(response);
    }

    @PostMapping // 'POST' http://localhost:8090/users 요청시 호출되는 메서드(핸들러)
    public ResponseEntity<User.Response> createUser(@RequestBody @Valid User.Request request) {
        User savedUser = userService.updateUser(request);

        User.Response response = User.Response.toResponse(savedUser);
        HttpStatus status = HttpStatus.CREATED;
        return ResponseEntity.status(status).body(response);
    }

    //TODO 이메일 인증번호

    @PutMapping
    public ResponseEntity<User.Response> updateUser(@RequestBody User.Request request) {
        User user = userService.updateUser(request);
        User.Response response = User.Response.toResponse(user);
        HttpStatus status = HttpStatus.OK;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping
    public ResponseEntity<User.Response> deleteUser(@RequestBody User.Request request) {
        // 유저를 지욱기 전에 유저리스트, 다이어리를 먼저 지워야함.
        //일단 유저 리스트부터 지우자. userId에 맞는 storyList의 리스트를 가져와서 for돌려서 하나하나 삭제
        User foundUser = userService.findUserById(request.getUserId());

        if(foundUser != null) {
            List<StoryList> storyLists = foundUser.getStoryLists();
            List<Diary> diaries = foundUser.getDiaries();
            for (StoryList storyList : storyLists) {
                storyListService.deleteStoryList(storyList.getStoryListId());
            }
            for (Diary diary : diaries) {
                diaryService.deleteDiary(diary.getDiaryId());
            }
        }
        User user = userService.deleteUser(request);

        User.Response response = User.Response.toResponse(user);
        HttpStatus status = HttpStatus.OK;
        return ResponseEntity.status(status).body(response);
    }
}
