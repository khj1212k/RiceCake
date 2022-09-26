package dev.RiceCake.repository;

import dev.RiceCake.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary,Integer> {
}
