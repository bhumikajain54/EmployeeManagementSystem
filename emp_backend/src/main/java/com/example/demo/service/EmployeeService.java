package com.example.demo.service;

import com.example.demo.model.Employee;

public class EmployeeService {
    private MailService mailService;

    public void sendWelcomeMail(Employee employee) {
        String to = employee.getEmail();
        String subject = "Welcome to Our Company";
        String text = "Dear " + employee.getName() + ",\n\nWelcome to our company!";

        mailService.sendMail(text,subject,to);
    }
}
