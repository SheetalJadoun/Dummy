package com.student.repository;

import com.student.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface Repository extends JpaRepository<Student,String>
{
    //@Query(value = "select * from student s where s.name=?1",nativeQuery = true)
    Student findByUsername(String username);

    Student findByEmail(String email);
}
