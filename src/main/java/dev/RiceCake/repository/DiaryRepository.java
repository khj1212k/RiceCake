package dev.RiceCake.repository;

import dev.RiceCake.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface DiaryRepository extends JpaRepository<Diary,Integer> {
    Diary findByDiaryDate(Date diaryDate);
}
