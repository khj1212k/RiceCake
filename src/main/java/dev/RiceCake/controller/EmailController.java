package dev.RiceCake.controller;

import dev.RiceCake.entity.User;
import dev.RiceCake.service.EmailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("email")
public class EmailController {
    private final EmailService emailService;

    @PostMapping("confirm")
    public ResponseEntity<String> mailConfirm(@RequestBody User.Request request) throws Exception {
        String code = emailService.sendSimpleMessage(request.getEmail());
        log.info("인증코드 : " + code);
        return ResponseEntity.status(HttpStatus.OK).body(code);
    }
}
