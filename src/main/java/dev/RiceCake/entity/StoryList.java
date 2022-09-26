package dev.RiceCake.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@Builder @ToString
@Entity
@Table(name = "STORY_LIST")
public class StoryList {

    @Id
    @Column(name = "STORY_LIST_TITLE", length = 100)
    private String storyListTitle;

    @Column(name = "STORY_LIST_SUB_TITLE")
    private String storyListSubTitle;

    @Column(name = "ORDER_NUMBER")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int OrderNumber;

    @OneToMany(mappedBy = "storyList")
    private List<Story> stroies;

    @ManyToOne // 여러주소 -> 한사람
    @JoinColumn(name = "USER_ID") // User테이블에서 어느 데이터랑 연결할건데? USER_ID!
    private User user;

    public void setUser(User user) {
        this.user = user;
        user.getStoryLists().add(this);
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    @Builder @ToString
    public static class Request {
        private String storyListTitle;
        private String storyListSubTitle;
        private String userId;

        public static StoryList toEntity(final StoryList.Request request) {
            return StoryList.builder()
                    .storyListTitle(request.getStoryListTitle())
                    .storyListSubTitle(request.getStoryListSubTitle())
                    .build();
        }
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    @Builder @ToString
    public static class Response {
        private String storyListTitle;
        private String storyListSubTitle;

        public static StoryList.Response toResponse(final StoryList storyList) {
            return StoryList.Response.builder()
                    .storyListTitle(storyList.getStoryListTitle())
                    .storyListSubTitle(storyList.getStoryListSubTitle())
                    .build();
        }
    }
}
