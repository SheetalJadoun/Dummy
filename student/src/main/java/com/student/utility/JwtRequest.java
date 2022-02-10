package com.student.utility;

import java.io.Serializable;

public class JwtRequest implements Serializable
{
    private String user;
    private String password;

    public String getUsername() {
        return user;
    }

    public void setUsername(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public JwtRequest(String username, String password) {
        this.user = username;
        this.password = password;
    }

    public JwtRequest() {
    }
}
