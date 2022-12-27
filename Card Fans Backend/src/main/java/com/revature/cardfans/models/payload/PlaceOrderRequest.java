package com.revature.cardfans.models.payload;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.revature.cardfans.models.User;

import lombok.Data;

@Data
public class PlaceOrderRequest {
    private int userId;
    private List<OrderItemRequest> items;
}
