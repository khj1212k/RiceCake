package dev.RiceCake.repository;

import dev.RiceCake.entity.StoryList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoryListRepository extends JpaRepository<StoryList,Integer> {
    StoryList findByOrderNumber(int orderNumber);
//    StoryList findByUserId(String userId);
    List<StoryList> findByUserUserId(String userId);

}
