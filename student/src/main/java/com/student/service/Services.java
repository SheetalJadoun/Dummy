package com.student.service;

import com.student.model.Student;
import com.student.repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Services
{
    @Autowired
    private Repository repo;

    public List<Student> getAll()
    {
        List<Student> li=repo.findAll();
        return li;
    }

    public Student addStudent(Student temp)
    {
        return repo.save(temp);
    }


}
