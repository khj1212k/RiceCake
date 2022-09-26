package dev.RiceCake.entity;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@Builder @ToString
@Entity
@Table(name = "STORY_LIST")
public class StoryList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "STORY_LIST_ID")
    private int storyListID;

    @Column(name = "STORY_LIST_TITLE")
    private String storyListTitle;

    @Column(name = "STORY_LIST_SUB_TITLE")
    private String storyListSubTitle;

    @Column(name = "USER_ID")
    private String userId;

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
                    .userId(request.getUserId())
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
