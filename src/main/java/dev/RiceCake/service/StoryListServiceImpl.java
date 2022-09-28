package dev.RiceCake.service;

import dev.RiceCake.entity.Story;
import dev.RiceCake.entity.StoryList;
import dev.RiceCake.entity.User;
import dev.RiceCake.repository.StoryListRepository;
import dev.RiceCake.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StoryListServiceImpl implements StoryListService{

    @Autowired
    private StoryListRepository storyListRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private StoryRepository storyRepository;


    @Override
    public List<StoryList> getStoryList(String id) {
        User user = userService.findUserById(id);
        return user.getStoryLists();
    }

    @Override
    public StoryList saveStoryList(StoryList storyList) {
        return storyListRepository.save(storyList);
    }

    @Override
    public void deleteStoryList(int id) {
        List<Story> list = storyRepository.findByStoryListStoryListId(id);
        for (Story story : list){
            storyRepository.deleteById(story.getStoryId());
        }
        storyListRepository.deleteById(id);
    }



    @Override
    public StoryList findByOrderNumber(StoryList.Request request) {
        return storyListRepository.findByOrderNumber(request.getOrderNumber());
    }

    @Override
    public StoryList findById(int id) {
        return storyListRepository.findById(id).get();
    }
}
