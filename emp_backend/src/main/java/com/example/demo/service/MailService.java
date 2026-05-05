package com.example.demo.service;

import com.example.demo.model.MailStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String fromMail;

    @Autowired
    public MailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendMail(String recipient, MailStructure mailStructure) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipient);
        message.setFrom(fromMail);
        message.setSubject(mailStructure.getSubject());
        message.setText(mailStructure.getMessage());

        javaMailSender.send(message);
    }

    public void sendMail(String text, String subject, String to) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setFrom(fromMail);
        message.setSubject(subject);
        message.setText(text);

        javaMailSender.send(message);
    }
}
