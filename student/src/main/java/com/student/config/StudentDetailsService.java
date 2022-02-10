package com.student.config;

import com.student.model.Student;
import com.student.repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class StudentDetailsService implements UserDetailsService
{

    @Autowired
    private Repository repo;
    @Override
    public UserDetails loadUserByUsername(String user) throws UsernameNotFoundException {
        Student st=repo.findByUsername(user);
        if(st==null)
        {
            System.out.println("student not found");
            throw new UsernameNotFoundException("Student not found");
        }
        System.out.println(st.getUsername());
        return new StudentDetails(st);
    }
}
