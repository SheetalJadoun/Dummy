package com.student.config;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


@SpringBootTest
@RunWith(SpringRunner.class)
public class WebSecurityTest
{
    @Autowired
    WebSecurity security;

    @Test
    public void passwordEncoderTest()
    {
        NoOpPasswordEncoder passwordEncoder= (NoOpPasswordEncoder) security.passwordEncoder();
        String pswrd=passwordEncoder.encode("abc");
        assertEquals("abc",pswrd);
    }
    @Test
    public void authenticationManagerTest() throws Exception {
        AuthenticationManager authenticationManager=security.authenticationManagerBean();
        assertNotNull(authenticationManager);
    }


}
