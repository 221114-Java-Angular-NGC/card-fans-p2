package com.revature.cardfans.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.cardfans.dao.UserDao;
import com.revature.cardfans.models.User;

import lombok.extern.slf4j.Slf4j;

@Slf4j // creates log object usage: log.info("test")
@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserDao userDao;

    public UserServiceImpl(UserDao u) {
        userDao = u;

    }

    @Override
    public User registerUser(User user) {
        log.info("Attemping to register user");
        return userDao.save(user);

    }

    @Override
    public Optional<User> getUserById(int id) {
        log.info("Searching for user with id {}", id);
        return userDao.findByUserId(id);
    }

    // If user updated successful
    // return updated user info
    // else returns
    @Override
    public Optional<User> updateUserInfo(User user) {
        log.info("Attemping to update user info");
        User user2 = userDao.save(user);

        if (user2 != null) {
            log.info("User info updated succesfully");
            return Optional.of(user2);
        }

        return Optional.of(user);
    }

    // Lookup username info, if valid user with username
    // compares password and returns user encased in optional
    // else returns empty optional
    @Override
    public Optional<User> login(String userName, String password) {
        log.info("Searching for user with username:{}", userName);
        Optional<User> user = userDao.findByUsername(userName);
        if (user.isPresent()) {
            log.info("User found with username:{}", userName);
            if (user.get().getPassword().compareTo(password) == 0) {
                log.info("Credentials match, returning user:{}", user);
                return user;
            }
            log.info("password incorrect");

        }
        log.info("Login attempt failed");
        return Optional.empty();
    }

}