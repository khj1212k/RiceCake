package dev.RiceCake.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@Builder
@Entity
@Table(name = "STORY_LIST")
public class StoryList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int storyListId;

    @Column(name = "STORY_LIST_TITLE", length = 100)
    private String storyListTitle;

    @Column(name = "STORY_LIST_SUB_TITLE")
    private String storyListSubTitle;

    @Column(name = "ORDER_NUMBER")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderNumber;

    @OneToMany(mappedBy = "storyList")
    private List<Story> stroies;

    @Override
    public String toString() {
        return "StoryList{" +
                "storyListId=" + storyListId +
                ", storyListTitle='" + storyListTitle + '\'' +
                ", storyListSubTitle='" + storyListSubTitle + '\'' +
                ", orderNumber=" + orderNumber +
                ", user=" + user +
                '}';
    }

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
        private int storyListId;
        private String storyListTitle;
        private String storyListSubTitle;
        private int orderNumber;
        private User User;

        public static StoryList toEntity(final StoryList.Request request) {
            return StoryList.builder()
                    .storyListId(request.getStoryListId())
                    .storyListTitle(request.getStoryListTitle())
                    .storyListSubTitle(request.getStoryListSubTitle())
                    .orderNumber(request.getOrderNumber())
                    .user(request.getUser())
                    .build();
        }


    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    @Builder @ToString
    public static class Response {
        private int storyListId;
        private String storyListTitle;
        private String storyListSubTitle;
        private int orderNumber;

        public static StoryList.Response toResponse(final StoryList storyList) {
            return Response.builder()
                    .storyListId(storyList.getStoryListId())
                    .storyListTitle(storyList.getStoryListTitle())
                    .storyListSubTitle(storyList.getStoryListSubTitle())
                    .orderNumber(storyList.getOrderNumber())
                    .build();
        }

        public static List<Response> toResponseList(final List<StoryList> storyLists){
            List<Response> list = new ArrayList<>();
            for(StoryList storyList : storyLists) {
                list.add(toResponse(storyList));
            }
            return list;
        }
    }
}
