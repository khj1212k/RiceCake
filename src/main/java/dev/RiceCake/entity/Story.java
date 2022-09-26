package dev.RiceCake.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Builder @ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int storyId;
    @Column
    private String storyTitle;
    @Column
    private String storyContents;
    @Column
    private Date storyDate;
    @ManyToOne
    @JoinColumn
    private int storyListId;
    @ManyToOne
    @JoinColumn
    private String userId;


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
                    .storyListId(request.getStoryListId())
                    .userId(request.getUserId())
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