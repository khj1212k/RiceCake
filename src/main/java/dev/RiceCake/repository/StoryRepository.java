package dev.RiceCake.repository;

import dev.RiceCake.entity.Story;
import dev.RiceCake.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoryRepository extends JpaRepository<Story,Integer> {
//    List<Story> findByUserId
}
