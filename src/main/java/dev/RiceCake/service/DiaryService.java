package dev.RiceCake.service;

import dev.RiceCake.entity.Diary;

import java.util.Date;
import java.util.List;

public interface DiaryService {


    Diary findDiaryByDate(Date diaryDate, String userId);
    Diary saveDiary(Diary newDiary);
    List<Diary> updateDiary(Diary.Request request);
    List<Diary> deleteDiary(int diaryId);
}
