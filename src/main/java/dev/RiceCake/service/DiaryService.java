package dev.RiceCake.service;

import dev.RiceCake.entity.Diary;

import java.util.List;

public interface DiaryService {

    List<Diary> findAllDiaries();
    Diary findDiaryById(int diaryId);
    Diary saveDiary(Diary newDiary);
    List<Diary> updateDiary(Diary.Request request);
    List<Diary> deleteDiary(int diaryId);
}
