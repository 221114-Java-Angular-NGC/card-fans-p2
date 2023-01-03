package com.revature.cardfans.models.payload;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class PlaceOrderRequest {
    private int userId;
    private List<OrderItemRequest> items;

    public PlaceOrderRequest() {
        items = new ArrayList<>();
    }

    public void insertOrderItem(OrderItemRequest o) {
        items.add(o);
    }
}
