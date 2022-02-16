package com.student.controller;

import com.student.model.Student;
import com.student.repository.Repository;
import com.student.service.Services;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
@RunWith(SpringRunner.class)
public class ControllerTest {
    @MockBean
    private Repository repo;
    @Autowired
    private Services service;


    @Test
    public void getStudentTest()
    {
        when(repo.findAll()).thenReturn(Stream.of(new Student(12,"abc@gmail.com","some","sheetal","Btech","IT","User"),new Student(2,"pqr@gmail.com","some","shweta","Btech","IT","User")).collect(Collectors.toList()));
        assertEquals(2,service.getAll().size());

    }

    @Test
    public void addStudentTest()
    {
        Student s=new Student(12,"abc@gmail.com","some","sheetal","Btech","IT","User");
        when(repo.save(s)).thenReturn(s);
        assertEquals(s,service.addStudent(s));
    }

    @Test
    public void getStudentByCourseTest()
    {
        String s="BTech";
        when(repo.findAllByCourse(s)).thenReturn(Stream.of(new Student(2,"abc@gmail.com","some","sheetal","BTech","IT","User")).collect(Collectors.toList()));
        assertEquals(1,service.findByCourse(s).size());
    }

    @Test
    public void deleteStudentTest()
    {
        Student s=new Student(12,"abc@gmail.com","some","sheetal","Btech","IT","User");
        service.delete(s);
        verify(repo,times(1)).delete(s);
    }
}
