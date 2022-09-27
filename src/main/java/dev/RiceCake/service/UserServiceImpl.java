package dev.RiceCake.service;

import dev.RiceCake.entity.User;
import dev.RiceCake.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findUserById(String id) {
        Optional<User> user = userRepository.findById(id);
        System.out.println(user.isPresent());
        return (user.isPresent()) ? user.get() : null;
    }
    @Override
    public User loginUser(User.Request request) {
        User user = findUserById(request.getUserId());
        if(user == null) return null;

        System.out.println("id 유효");

        return (user.getPassword().equals(request.getPassword())) ? user : null;
    }

    @Override
    public User createUser(User user) {
        User newUser = findUserById(user.getUserId());

        return newUser == null ? userRepository.save(user) : null;
    }

    @Override
    public User updateUser(User.Request request) {
        User user = findUserById(request.getUserId());

        if(user == null) return null;

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        return userRepository.save(user);
    }

    @Override
    public User deleteUser(String id) {
        User user = findUserById(id);
        if(user == null) return null;

        userRepository.deleteById(id);
        return user;
    }
}
