package dev.RiceCake.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

    @ManyToOne // 여러스토리 -> 한 스토리리스트
    @JoinColumn(name = "STORY_LIST_ID")
    private StoryList storyList;


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
        private int storyId;
        private String storyTitle;
        private String storyContents;
        private Date storyDate;
        private StoryList storyList;

        public static Story toEntity(final Request request) {
            return Story.builder()
                    .storyId(request.getStoryId())
                    .storyTitle(request.getStoryTitle())
                    .storyContents(request.getStoryContents())
                    .storyDate(request.getStoryDate())
                    .storyList(request.getStoryList())
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
        private int storyId;
        private String storyTitle;
        private String storyContents;
        private Date storyDate;

        public static Story.Response toResponse(final Story story) {
            return Response.builder()
                    .storyId(story.getStoryId())
                    .storyTitle(story.getStoryTitle())
                    .storyContents(story.getStoryContents())
                    .storyDate(story.getStoryDate())
                    .build();
        }

        public static List<Story.Response> toResponseList(final List<Story> storys) {
            List<Story.Response> list = new ArrayList<>();
            for (Story story : storys) {
                list.add(toResponse(story));
            }
            return list;
        }
    }
}