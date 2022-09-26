package dev.RiceCake.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "USERS")
public class User {
    @Id
    @Column(name = "USER_ID", length = 100)
    private String id;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email; //이메일 유효성검사

    private List<StoryList> storyLists;
}
