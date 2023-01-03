package com.revature.cardfans.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.*;
import javax.validation.constraints.Size;

import org.hibernate.annotations.ManyToAny;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity(name = "orders")
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private int orderId;

    @JsonIgnore
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    @NotNull
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "order")
    private List<OrderItem> items = new ArrayList<>();

    @JsonIgnore
    @NotNull
    @Column(name = "total")
    private double total;

    @JsonIgnore
    @NotNull
    @Column(name = "firstName")
    private String firstName;
    
    @JsonIgnore
    @NotNull
    @Column(name = "lastName")
    private String lastName;

    @JsonIgnore
    @NotNull
    @Column(name = "email")
    private String email;

    @JsonIgnore
    @NotNull
    @Column(name = "phoneNumber")
    private String phoneNumber;

    @JsonIgnore
    @NotNull
    @Column(name = "address1")
    private String address1;

    @JsonIgnore
    @Column(name = "address2")
    private String address2;

    @JsonIgnore
    @NotNull
    @Column(name = "city")
    private String city;

    @JsonIgnore
    @NotNull
    @Column(name = "state")
    private String state;

    @JsonIgnore
    @NotNull
    @Column(name = "zipCode")
    private String zipCode;

    @JsonIgnore
    @NotNull
    @Column(name = "country")
    private String country;

    
    public void insertOrderItem(OrderItem o) {
        items.add(o);
    }

}
