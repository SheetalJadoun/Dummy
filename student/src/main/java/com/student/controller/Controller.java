package com.student.controller;


import com.student.model.Student;
import com.student.service.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/get{course}")
    public List<Student> getStudentByCourse(@RequestParam String course)
    {
        return service.findByCourse(course);
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

    @PutMapping("/update")
    public Student updateStudent(@RequestBody Student temp)
    {
        Student s=null;
        if(temp.getUsername()!=null)
        {
            s= service.updateStudent(temp);
        }
        return s;
    }

    @PutMapping("/update{email}{name}")
    public Student updateUserName(@RequestParam String email,String name)
    {
        Student s=service.updateData(email,name);
        return s;
    }

    @DeleteMapping("/delete{id}")
    public String delete(@RequestParam int id)
    {
        Student s=service.findbyId(id);
        if(s!=null)
        {
            service.delete(s);
            return "Deleted";
        }
        return "error";
    }

}
