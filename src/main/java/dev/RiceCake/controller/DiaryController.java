package dev.RiceCake.controller;

import dev.RiceCake.entity.Diary;
import dev.RiceCake.entity.User;
import dev.RiceCake.repository.UserRepository;
import dev.RiceCake.service.DiaryService;
import dev.RiceCake.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("diaries")
@CrossOrigin(origins = "*")
public class DiaryController {

    @Autowired
    private DiaryService diaryService;
    @Autowired
    private UserService userService;

    @GetMapping
    public List<Diary.Response> getDiaries() {

        List<Diary> diaries = diaryService.findAllDiaries();
        return Diary.Response.toResponseList(diaries);
    }

    //TODO 유저정보와 다이어리이름에 맞는 다이어리 제목 및 내용 및 감정 반환
    @GetMapping("{diaryId}")
    public Diary.Response getDiary(@PathVariable Date diaryDate) {
        Diary foundDiary = diaryService.findDiaryByDate(diaryDate);
		return Diary.Response.toResponse(foundDiary);
    }



    //TODO 다이어리 추가
    @PostMapping
    public ResponseEntity<Diary.Response> createDiary(@RequestBody Diary.Request request){
        System.out.println(request);
        Diary diary = Diary.Request.toEntity(request);
        diary.setUser(userService.findUserById(request.getUser().getUserId()));
        Diary savedDiary = diaryService.saveDiary(diary);
        System.out.println(diary);

        Diary.Response response = Diary.Response.toResponse(savedDiary);
        System.out.println(response);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    //TODO 다이어리 수정
    @PutMapping
    public List<Diary.Response> updateDiary (@RequestBody Diary.Request request){
        List<Diary> diaries = diaryService.updateDiary(request);
        return Diary.Response.toResponseList(diaries);
    }

    //TODO 다이어리 삭제
    @DeleteMapping
    public List<Diary.Response> deleteDiary(@RequestParam("diaryId") int diaryId) {
        List<Diary> diaries = diaryService.deleteDiary(diaryId);
        return Diary.Response.toResponseList(diaries);
    }
}
