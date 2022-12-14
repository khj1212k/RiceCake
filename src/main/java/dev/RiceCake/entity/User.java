package dev.RiceCake.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@Builder
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

    @OneToMany(mappedBy = "user")
    private List<StoryList> storyLists;

    @OneToMany(mappedBy = "user")
    private List<Diary> diaries;

    @Override
    public String toString() {
        return "User{" +
                "userId='" + userId + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    @Builder @ToString
    public static class Request {
        @NotBlank(message = "userId 공백('', ' ')이나 null 지정 불가")
        private String userId;
        @NotBlank(message = "password 공백('', ' ')이나 null 지정 불가")
        private String password;
        private String name;
        private String email;
        private Diary diary;
        private StoryList storyList;

        public static User toEntity(final Request request) {
            return User.builder()
                    .userId(request.getUserId())
                    .password(request.getPassword())
                    .name(request.getName())
                    .email(request.getEmail())
                    .diaries(new ArrayList<>())
                    .storyLists(new ArrayList<>())
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
        private List<StoryList.Response> storyLists;
        private List<Diary.Response> diaries;

        public static User.Response toResponse(final User user) {
            return (user != null) ? Response.builder()
                    .userId(user.getUserId())
                    .name(user.getName())
                    .email(user.getEmail())
                    .storyLists(StoryList.Response.toResponseList(user.getStoryLists()))
                    .diaries(Diary.Response.toResponseList(user.getDiaries()))
                    .build() : Response.builder()
                    .userId("")
                    .build();
        }
        public static List<User.Response> toResponseList(final List<User> users) {
            List<User.Response> list = new ArrayList<>();
            if(!users.isEmpty())
                for (User user : users) list.add(toResponse(user));

            return list;
        }
    }
    @NoArgsConstructor
    @AllArgsConstructor
    @Getter @Setter
    @Builder @ToString
    public static class passwordResponse {
        private String userId;
        private String password;

        public static User.passwordResponse toResponse(final User user) {
            return (user != null) ? passwordResponse.builder()
                    .userId(user.getUserId())
                    .password(user.getPassword())
                    .build() : passwordResponse.builder().userId("").build();
        }
    }
}
