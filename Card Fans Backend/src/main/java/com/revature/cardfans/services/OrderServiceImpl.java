package com.revature.cardfans.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.cardfans.dao.OrderDao;
import com.revature.cardfans.models.Order;

import com.revature.cardfans.models.payload.PlaceOrderRequest;

@Service
public class OrderServiceImpl implements OrderService {

    private OrderDao orderDao;

    @Autowired
    public OrderServiceImpl(OrderDao orderDao) {
        this.orderDao = orderDao;

    }

    @Override
    public List<Order> getOrdersByUserId(Integer userId) {

        return orderDao.findByUser_UserId(userId);
    }

    /*
     * @Override
     * public List<Order> getOrdersByUsername(String userId) {
     * 
     * return orderDao.findByUser_Username(userId);
     * }
     */

    @Override
    public Optional<Order> saveOrder(PlaceOrderRequest orderRequest) {

        // Associate order with user and items
        Order order = new Order(orderRequest);
        return Optional.of(orderDao.save(order));
    }

}
