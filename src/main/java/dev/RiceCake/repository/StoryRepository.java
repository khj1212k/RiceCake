package dev.RiceCake.repository;

import dev.RiceCake.entity.Story;
import dev.RiceCake.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoryRepository extends JpaRepository<Story,Integer> {
}
