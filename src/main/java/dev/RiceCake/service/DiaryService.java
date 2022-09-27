package dev.RiceCake.service;

import dev.RiceCake.entity.Diary;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

public interface DiaryService {

    List<Diary> findAllDiaries();
    Diary findDiaryByDate(Date diaryDate);
    Diary saveDiary(Diary newDiary);
    List<Diary> updateDiary(Diary.Request request);
    List<Diary> deleteDiary(int diaryId);
}
