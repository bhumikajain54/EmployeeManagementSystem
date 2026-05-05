package com.example.demo.controller;

import com.example.demo.model.MailStructure;
import com.example.demo.repository.MailRepository;
import com.example.demo.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mail")
public class MailController {

    private final MailService mailService;
    private final MailRepository mailRepository;

    @Autowired
    public MailController(MailService mailService, MailRepository mailRepository) {
        this.mailService = mailService;
        this.mailRepository = mailRepository;
    }

    @PostMapping("send/{mail}")
    public ResponseEntity<String> sendMail(@PathVariable String mail, @RequestBody MailStructure request) {
        if (mailService != null && request != null) {
            mailService.sendMail(mail, request);
            mailRepository.save(request);
        } else if (mailService == null) {
            throw new IllegalStateException("mailService is null");
        } else {
            return ResponseEntity.badRequest().body("Request body is missing");
        }

        return ResponseEntity.ok("Mail sent successfully to: " + request.getEmailId());
    }
}
