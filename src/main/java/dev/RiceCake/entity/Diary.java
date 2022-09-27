package dev.RiceCake.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
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

    @Override
    public String toString() {
        return "Diary{" +
                "diaryId=" + diaryId +
                ", diaryTitle='" + diaryTitle + '\'' +
                ", diaryContents='" + diaryContents + '\'' +
                ", diaryDate=" + diaryDate +
                ", emotion=" + emotion +
                '}';
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    @Builder
    @ToString
    public static class Request {
        @NotBlank(message = "diaryId 공백('', ' ')이나 null 지정 불가")
        private int diaryId;
        @NotBlank(message = "diaryTitle 공백('', ' ')이나 null 지정 불가")
        private String diaryTitle;
        @NotBlank(message = "diaryContents 공백('', ' ')이나 null 지정 불가")
        private String diaryContents;
        @NotBlank(message = "diaryDate 공백('', ' ')이나 null 지정 불가")
        private Date diaryDate;
        @NotBlank(message = "emotion 공백('', ' ')이나 null 지정 불가")
        private Emotion emotion;
        private User user;

        public static Diary toEntity(final Request request) {
            return Diary.builder()
                    .diaryId(request.getDiaryId())
                    .diaryTitle(request.getDiaryTitle())
                    .diaryContents(request.getDiaryContents())
                    .diaryDate(request.getDiaryDate())
                    .emotion(request.getEmotion())
                    .user(request.getUser())
                    .build();

        }
    }

        @Builder
        @NoArgsConstructor
        @AllArgsConstructor
        @Getter
        @Setter
        @ToString
        public static class Response {
            private int diaryId;
            private String diaryTitle;
            private String diaryContents;
            private Date diaryDate;
            private Emotion emotion;
            private User user;

            public static Diary.Response toResponse(final Diary diary) {
                return Response.builder()
                        .diaryId(diary.getDiaryId())
                        .diaryTitle(diary.getDiaryTitle())
                        .diaryContents(diary.getDiaryContents())
                        .diaryDate(diary.getDiaryDate())
                        .emotion(diary.getEmotion())
                        .user(diary.getUser())
                        .build();
            }

            public static List<Diary.Response> toResponseList(final List<Diary> diaries) {
                List<Diary.Response> list = new ArrayList<>();
                for (Diary diary : diaries) {
                    list.add(toResponse(diary));
                }
                return list;
            }

        }
    }
