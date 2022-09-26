package dev.RiceCake.repository;

import dev.RiceCake.entity.StoryList;
import dev.RiceCake.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoryListRepository extends JpaRepository<StoryList,String> {
}
