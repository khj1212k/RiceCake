package dev.RiceCake.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@Builder @ToString
@Entity
@Table(name = "USERS")
public class User {
    @Id
    @Column(name = "USER_ID", length = 100)
    private String userId;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "EMAIL", nullable = false)
    private String email; //이메일 유효성검사

    @Column(name = "STORY_LISTS")
    private List<StoryList> storyLists;

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    @Builder @ToString
    public static class Request {
        private String userId;
        private String password;
        private String name;
        private String email;

        public static User toEntity(final Request request) {
            return User.builder()
                    .userId(request.getUserId())
                    .password(request.getPassword())
                    .name(request.getName())
                    .email(request.getEmail())
                    .build();
        }
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    @Builder @ToString
    public static class Response {
        private String userId;
        private String name;
        private String email;
        private List<StoryList> storyLists;

        public static User.Response toResponse(final User user) {
            return Response.builder()
                    .userId(user.getUserId())
                    .name(user.getName())
                    .email(user.getEmail())
                    .storyLists(user.getStoryLists())
                    .build();
        }

    }
}
