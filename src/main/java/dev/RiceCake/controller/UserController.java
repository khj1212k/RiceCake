package dev.RiceCake.controller;

import dev.RiceCake.entity.User;
import dev.RiceCake.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

@RestController
@RequestMapping("users")
public class UserController {
    @Autowired
    private UserService userService;

    private JavaMailSender mailSender;
    @Value("${spring.mail.username}")
    private String sender;

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
        User savedUser = userService.createUser(user);

        User.Response response = User.Response.toResponse(savedUser);
        HttpStatus status = response != null ? HttpStatus.CREATED : HttpStatus.NO_CONTENT;
        return ResponseEntity.status(status).body(response);
    }

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

    @PostMapping("mail-confirm")
    public ResponseEntity<String> confirmEmail(@RequestBody User.Request request)
                                                                        throws Exception {
        System.out.println(request.getEmail());
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(request.getEmail());
        message.setFrom(sender);
        message.setSubject(request.getName() + " : New Temporary Password is here!");
        message.setText("Hello" + request.getName());
        mailSender.send(message);

        return null;
    }
}
