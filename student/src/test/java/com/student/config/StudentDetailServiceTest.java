package com.student.config;

import com.student.model.Student;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@RunWith(SpringRunner.class)
public class StudentDetailServiceTest
{
    @Autowired
    StudentDetailsService studentDetailsService;

    @Test
    public void loadUserByName()
    {
        Student s=new Student(12,"abc@gmail.com","some","sheetal","Btech","IT","User");
        assertEquals(s,studentDetailsService.loadUserByUsername("sheetal"));
    }
}
