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


    public Student updateStudent(Student temp)
    {
        String name=temp.getUsername();
        Student s=repo.findByUsername(name);
        s.setUsername(temp.getUsername());
        s.setBranch(temp.getBranch());
        s.setEmail(temp.getEmail());
        s.setPassword(temp.getPassword());
        s.setCourse(temp.getCourse());
        repo.save(s);
        return s;
    }

    public Student updateData(String email,String name)
    {
        Student s=repo.findByEmail(email);
        s.setUsername(name);
        repo.save(s);
        return s;
    }

    public Student find(String email)
    {
        return repo.findByEmail(email);
    }

    public void delete(Student s)
    {
        repo.delete(s);
    }

    public Student findbyId(int id) {
        return repo.findById(id);
    }

    public List<Student> findByCourse(String course)
    {
        return repo.findAllByCourse(course);
    }
}
