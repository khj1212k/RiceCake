package dev.RiceCake.service;

import dev.RiceCake.entity.User;
import dev.RiceCake.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findUserById(String id) {
        Optional<User> user = userRepository.findById(id);
        //System.out.println(user.isPresent());
        return (user.isPresent()) ? user.get() : null;
    }

    @Override
    public List<User> findUserByEmail(String email) {
        return (userRepository.findByEmail(email) != null) ? userRepository.findByEmail(email) : new ArrayList<>();
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

        if(request.getName() != null) user.setName(request.getName());
        System.out.println(user.getName());
        System.out.println(request.getName());
        if(request.getPassword() != null) user.setPassword(request.getPassword());

        return userRepository.save(user);
    }

    @Override
    public User deleteUser(User.Request request) {
        User user = findUserById(request.getUserId());
        if(user == null) return null;

        userRepository.deleteById(request.getUserId());
        return user;
    }
}
