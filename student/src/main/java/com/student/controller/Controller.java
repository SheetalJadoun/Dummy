package com.student.controller;


import com.student.model.Student;
import com.student.service.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller
{
    @Autowired
    private Services service;

    @GetMapping("/get")
    public List<Student> getStudents()
    {
        List<Student> ans=new ArrayList<>();
        ans=service.getAll();
        return ans;
    }

    @PostMapping("/add")
    public Student addStudent(@RequestBody Student temp)
    {
        Student s=null;
        if(temp.getUsername()!=null)
        {
            s= service.addStudent(temp);
        }
        return s;
    }
}
