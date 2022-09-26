package dev.RiceCake.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Builder @ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@Table(name = "STORY")
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "STORY_ID")
    private int storyId;


    @Column(name = "STORY_TITLE", nullable = false)
    private String storyTitle;

    @Column(name = "STORY_CONTENTS", length = 15000) // 5000자
    private String storyContents;

    @Column(name = "STORY_DATE", nullable = false)
    private Date storyDate;

    @ManyToOne // 여러주소 -> 한사람
    @JoinColumn(name = "STORY_LIST_TITLE")
    private StoryList storyList;

    @ManyToOne // 여러스토리-> 한스토리리스트
    @JoinColumn(name = "USER_ID") // User테이블에서 어느 데이터랑 연결할건데? USER_ID!
    private User user;



    public void setStoryList(StoryList storyList) {
        this.storyList = storyList;
        storyList.getStroies().add(this);
    }


    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    @Builder
    @ToString
    public static class Request {
        private String storyTitle;
        private String storyContents;
        private Date storyDate;
        private int storyListId;
        private String userId;

        public static Story toEntity(final Request request) {
            return Story.builder()
                    .storyTitle(request.getStoryTitle())
                    .storyContents(request.getStoryContents())
                    .storyDate(request.getStoryDate())
                    .build();
        }
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    @Builder
    @ToString
    public static class Response {
        private String storyTitle;
        private String storyContents;
        private Date storyDate;

        public static Story.Response toResponse(final Story story) {
            return Response.builder()
                    .storyTitle(story.getStoryTitle())
                    .storyContents(story.getStoryContents())
                    .storyDate(story.getStoryDate())
                    .build();
        }
    }
}