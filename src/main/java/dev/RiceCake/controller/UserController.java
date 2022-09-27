package dev.RiceCake.controller;

import dev.RiceCake.entity.User;
import dev.RiceCake.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("auth/sign-in")
    public ResponseEntity<User.Response> signIn(@RequestBody User.Request request) {
        User user = userService.loginUser(request);
        User.Response response = User.Response.toResponse(user);
        HttpStatus status = response != null ? HttpStatus.OK : HttpStatus.NO_CONTENT;

        return ResponseEntity.status(status).body(response);
    }

    @PostMapping // 'POST' http://localhost:8090/users 요청시 호출되는 메서드(핸들러)
    public ResponseEntity<User.Response> createUser(@RequestBody @Valid User.Request request) {
        User user = User.Request.toEntity(request);
        System.out.println(user);
        User savedUser = userService.createUser(user);

        User.Response response = User.Response.toResponse(savedUser);
        HttpStatus status = response != null ? HttpStatus.CREATED : HttpStatus.NO_CONTENT;
        return ResponseEntity.status(status).body(response);
    }

    //TODO 이메일 인증번호

    @PutMapping
    public ResponseEntity<User.Response> updateUser(@RequestBody User.Request request) {
        User user = userService.updateUser(request);
        User.Response response = User.Response.toResponse(user);
        HttpStatus status = response != null ? HttpStatus.OK : HttpStatus.NO_CONTENT;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping
    public ResponseEntity<User.Response> deleteUser(@RequestParam("id") String id) {
        User user = userService.deleteUser(id);
        User.Response response = User.Response.toResponse(user);
        HttpStatus status = response != null ? HttpStatus.OK : HttpStatus.NO_CONTENT;
        return ResponseEntity.status(status).body(response);
    }
}
