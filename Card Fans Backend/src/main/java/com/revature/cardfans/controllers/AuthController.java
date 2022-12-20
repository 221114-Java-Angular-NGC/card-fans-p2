package com.revature.cardfans.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.cardfans.models.User;
import com.revature.cardfans.models.payload.LoginRequest;
import com.revature.cardfans.services.IUserService;

import lombok.extern.slf4j.Slf4j;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Slf4j
@RestController
@RequestMapping(path = ("/api/v1/auth"), produces = "application/json")

public class AuthController {
    @Autowired
    private IUserService uServ;

    /* Handles sing in/login attempts */
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/signin")
    public ResponseEntity<User> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        log.info("Attemping to login the user");
        Optional<User> user = uServ.login(loginRequest.getUsername(), loginRequest.getPassword());

        if (user.isPresent()) {
            log.info("Valid credentials, returning user in body");
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        } else {
            log.info("Username or password incorrect");
            ResponseEntity<User> r = new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
            return r;
        }

    }

    /* Handles user registration */
    @PostMapping("/signup")
    public ResponseEntity<User> saveUser(@Valid @RequestBody User user) {

        try {

            User _user = uServ.registerUser(user);
            log.info("Registration succesful, returniing user in body");
            return new ResponseEntity<>(_user, HttpStatus.CREATED);
        } catch (Exception e) {
            log.info("Registration failed with error:{}", e.getMessage());
            ResponseEntity<User> r = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            return r;

        }
    }

}
