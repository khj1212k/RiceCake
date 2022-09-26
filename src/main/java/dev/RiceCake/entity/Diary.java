package dev.RiceCake.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "DIARY")
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DIARY_ID")
    private int diaryId;

    @Column(nullable = false)
    private String diaryTitle;

    @Column(nullable = false, length = 15000) // 5000 자
    private String diaryContents;

    @Column(nullable = false)
    private Date diaryDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Emotion emotion;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    public void setUser(User user) {
        this.user = user;
        user.getDiaries().add(this);
    }

    @Getter @Setter
    @Builder
    @ToString
    public static class Request {
        @NotBlank(message = "diaryTitle 공백('', ' ')이나 null 지정 불가")
        private String diaryTitle;
        @NotBlank(message = "diaryContents 공백('', ' ')이나 null 지정 불가")
        private String diaryContents;
        @NotBlank(message = "diaryDate 공백('', ' ')이나 null 지정 불가")
        private Date diaryDate;
        @NotBlank(message = "emotion 공백('', ' ')이나 null 지정 불가")
        private Emotion emotion;
        private int userId;

        public static Request toEntity(Diary diary) {
            return Request.builder()
                    .diaryTitle(diary.diaryTitle)
                    .diaryContents(diary.diaryContents)
                    .diaryDate(diary.diaryDate)
                    .emotion(diary.emotion)
                    .build();

        }

        @Builder
        @NoArgsConstructor
        @AllArgsConstructor
        @Getter
        @Setter
        public static class Response {
            private String diaryTitle;
            private String diaryContents;
            private Date diaryDate;
            private Emotion emotion;
            private int userId;

            public static Response toResponse(Diary diary) {
                return Response.builder()
                        .diaryTitle(diary.diaryTitle)
                        .diaryContents(diary.diaryContents)
                        .diaryDate(diary.diaryDate)
                        .emotion(diary.emotion)
                        .build();
            }

        }


    }
}
