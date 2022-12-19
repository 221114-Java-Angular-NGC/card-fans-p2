package com.revature.cardfans.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
@RequestMapping(path = ("/api/v1/users"), produces = "application/json")

public class UserController {

    @Autowired
    private IUserService uServ;

    public UserController(IUserService uServ) {
        this.uServ = uServ;

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") Integer id) {

        Optional<User> _user = uServ.getUserById(id);
        if (_user.isPresent()) {
            return new ResponseEntity<>(_user.get(), HttpStatus.CREATED);
        } else {
            ResponseEntity<User> r = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            return r;
        }

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("")
    public ResponseEntity<User> getUser(@RequestBody User user) {

        Optional<User> _user = uServ.updateUserInfo(user);
        if (_user.isPresent()) {
            return new ResponseEntity<>(_user.get(), HttpStatus.ACCEPTED);
        } else {
            ResponseEntity<User> r = new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            return r;
        }

    }

}