package com.revature.cardfans.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.cardfans.dao.OrderDao;
import com.revature.cardfans.models.Order;
import com.revature.cardfans.models.OrderItem;
import com.revature.cardfans.models.Product;
import com.revature.cardfans.models.User;
import com.revature.cardfans.models.payload.OrderItemRequest;
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
        User user = new User();

        user.setUserId(orderRequest.getUserId());

        // Parse request body and create order
        Order order;
        order = new Order();
        order.setUser(user);

        List<OrderItemRequest> itemList = orderRequest.getItems();
        for (OrderItemRequest item : itemList) {
            OrderItem oItem = new OrderItem();
            oItem.setOrder(order);
            oItem.setQuantity(item.getQuantity());

            Product p = new Product();
            p.setProductId(item.getProductId());
            oItem.setProduct(p);
            order.insertOrderItem(oItem);
        }
        return Optional.of(orderDao.save(order));
    }

}
