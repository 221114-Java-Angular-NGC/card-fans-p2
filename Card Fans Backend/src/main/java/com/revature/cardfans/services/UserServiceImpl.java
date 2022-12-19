package com.revature.cardfans.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.cardfans.dao.UserDao;
import com.revature.cardfans.models.User;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserDao userDao;

    public UserServiceImpl(UserDao u) {
        userDao = u;

    }

    @Override
    public User registerUser(User user) {
        return userDao.save(user);

    }

    @Override
    public Optional<User> getUserById(int id) {

        return userDao.findByUserId(id);
    }

    @Override
    public Optional<User> login(String userName, String password) {
        Optional<User> user = userDao.findByUsername(userName);
        if (user.isPresent()) {
            if (user.get().getPassword().compareTo(password) == 0) {
                return user;
            }
        }
        return Optional.empty();
    }

}