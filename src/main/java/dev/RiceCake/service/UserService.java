package dev.RiceCake.service;

import dev.RiceCake.entity.User;

import java.util.List;

public interface UserService {
    User findUserById(String id);
    List<User> findUserByEmail(String email);
    User loginUser(User.Request request);
    User createUser(User.Request request);
    User updateUser(User.Request request);
    User deleteUser(User.Request request);
}
