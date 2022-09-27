package dev.RiceCake.service;

import dev.RiceCake.entity.User;

public interface UserService {
    User findUserById(String id);
    User loginUser(User.Request request);
    User createUser(User newUser);
    User updateUser(User.Request request);
    User deleteUser(String id);
}
