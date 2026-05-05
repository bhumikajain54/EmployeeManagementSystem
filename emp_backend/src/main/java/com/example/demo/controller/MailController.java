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
    @Autowired
    private MailRepository mailRepository;
    @Autowired
    public MailController(MailService mailService) {
        this.mailService = mailService;
    }
    @PostMapping("send/{mail}")
    public ResponseEntity<String> sendMail(@PathVariable String mail, @RequestBody MailStructure request) {
        System.out.println("Received POST request body: " + request.getEmailId() + ", " + request.getLocalDate());

        // Process the request body
        if (mailService != null) {
            mailService.sendMail(mail, request);
            mailRepository.save(request);
        } else {
            // Handle the case where mailService is null
            // You can log an error or throw an exception, depending on your requirement
            throw new IllegalStateException("mailService is null");
        }

        return ResponseEntity.ok("Received POST request body: " + request.getEmailId() + ", " + request.getLocalDate());
    }

    /*public void sendEMail(String email,@RequestBody MailStructure ml) {
        // Check if mailService is null before invoking its method
        if (mailService != null) {
            mailService.sendMail(email, ml);
        } else {
            // Handle the case where mailService is null
            // You can log an error or throw an exception, depending on your requirement
            throw new IllegalStateException("mailService is null");
        }
    }*/


}
