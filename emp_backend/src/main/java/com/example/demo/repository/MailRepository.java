package com.example.demo.repository;


import com.example.demo.model.MailStructure;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MailRepository extends JpaRepository<MailStructure,Long> {

}
