package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="mail")
public class MailStructure {


        public MailStructure() {}


        public MailStructure(String subject, String message, String emailId, String localDate) {
            super();
            this.subject = subject;
            this.message = message;
            this.emailId = emailId;
            this.localDate = localDate;
        }

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;

        @Column(name="subject")
        private String subject;

        @Column(name="message")
        private String message;

        @Column(name="emailId")
        private String emailId;

        @Column(name="localDate")
        private String localDate;


        public long getId() {
            return id;
        }
        public void setId(long id) {
            this.id = id;
        }
        public String getSubject() {
            return subject;
        }
        public void setSubject(String subject) {
            this.subject = subject;
        }
        public String getMessage() {
            return message;
        }
        public void setMessage(String message) {
            this.message = message;
        }
        public String getEmailId() {
            return emailId;
        }
        public void setEmailId(String emailId) {
            this.emailId = emailId;
        }
        public String getLocalDate() {
            return localDate;
        }
        public void setLocalDate(String localDate) {
            this.localDate =localDate ;
        }

    }

