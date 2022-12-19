package com.revature.cardfans.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    @NotNull
    private int userId;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    @Column(name = "user_name")
    private String username;

    @NotNull
    private String email;

    @NotNull
    private String password;

    @Column(name = "address_line_1")
    private String addressLine1;

    private String city;

    private String state;

    private String zipCode;

}
