package com.revature.cardfans.models.payload;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class OrderItemRequest {

    private int productId;

    private int quantity;

}
