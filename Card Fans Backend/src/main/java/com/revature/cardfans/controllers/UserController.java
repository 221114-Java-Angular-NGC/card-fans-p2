package com.revature.cardfans.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.cardfans.models.User;
import com.revature.cardfans.services.IUserService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping(path = ("/api"), produces = "application/json")

public class UserController {

    @Autowired
    private IUserService uServ;

    public UserController(IUserService uServ) {
        this.uServ = uServ;

    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") Integer id) {

        Optional<User> _user = uServ.getUserById(id);
        if (_user.isPresent()) {
            return new ResponseEntity<>(_user.get(), HttpStatus.CREATED);
        } else {
            ResponseEntity<User> r = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            return r;
        }

    }

    @PostMapping("/users")
    public ResponseEntity<User> saveUser(@RequestBody User user) {

        try {

            user.setUserType(1);
            User _user = uServ.registerUser(user);
            return new ResponseEntity<>(_user, HttpStatus.CREATED);
        } catch (Exception e) {
            ResponseEntity<User> r = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            return r;

        }
    }
}