package com.student.config;

import com.student.utility.JwtRequest;
import com.student.utility.JwtResponse;
import com.student.utility.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
public class JwtController
{
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtilToken;
    @Autowired
    private StudentDetailsService studentDetailsService;

    @GetMapping("/hello")
    public String firstPage()
    {
        return "Hello sheetal!";
    }
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        }
        catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }


        final UserDetails userDetails = studentDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtUtilToken.generateToken(userDetails);

        System.out.println(jwt);
        return ResponseEntity.ok(new JwtResponse(jwt));
    }
}
