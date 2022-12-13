package com.revature.cardfans.services;

import java.util.Optional;

import com.revature.cardfans.models.User;

public interface IUserService {

    public User registerUser(User user);

    public Optional<User> login(String userName, String password);

    public Optional<User> getUserById(int id);

}
