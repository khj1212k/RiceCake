package dev.RiceCake.service;


import dev.RiceCake.entity.Diary;
import dev.RiceCake.repository.DiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class DiaryServiceImpl implements DiaryService{

    @Autowired
    private DiaryRepository diaryRepository;

    @Override
    public List<Diary> findAllDiaries() {
        return diaryRepository.findAll();
	}

    @Override
    public Diary findDiaryByDate(Date diaryDate) {

        return diaryRepository.findByDiaryDate(diaryDate);
    }

    @Override
    public Diary saveDiary(Diary newDiary) {
        return diaryRepository.save(newDiary);
    }

    @Override
    public List<Diary> updateDiary(Diary.Request request) {
        final Optional<Diary> diary = Optional.ofNullable(findDiaryByDate(request.getDiaryDate()));

        if (diary.isPresent()){
            final Diary foundDiary = diary.get();

            foundDiary.setDiaryTitle(request.getDiaryTitle());
            foundDiary.setDiaryContents(request.getDiaryContents());
            foundDiary.setDiaryDate(request.getDiaryDate());
            foundDiary.setEmotion(request.getEmotion());

            diaryRepository.save(foundDiary);
        }
        return diaryRepository.findAll();
    }
    @Override
    public List<Diary> deleteDiary(int diaryId) {
        diaryRepository.deleteById(diaryId);

        return diaryRepository.findAll();
    }
}
