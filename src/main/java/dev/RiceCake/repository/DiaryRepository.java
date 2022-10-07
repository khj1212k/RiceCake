package dev.RiceCake.repository;

import dev.RiceCake.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface DiaryRepository extends JpaRepository<Diary,Integer> {
    Diary findByDiaryDateAndUserUserId (Date diaryDate, String userId);
    List<Diary> findByUserUserId (String userId);
}