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

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping(path = ("/api/v1/auth"), produces = "application/json")

public class AuthController {
    @Autowired
    private IUserService uServ;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/signin")
    public ResponseEntity<User> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Optional<User> user = uServ.login(loginRequest.getUsername(), loginRequest.getPassword());

        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        } else {
            ResponseEntity<User> r = new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
            return r;
        }

    }

    @PostMapping("/signup")
    public ResponseEntity<User> saveUser(@RequestBody User user) {

        try {

            User _user = uServ.registerUser(user);
            return new ResponseEntity<>(_user, HttpStatus.CREATED);
        } catch (Exception e) {
            ResponseEntity<User> r = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            return r;

        }
    }

}
