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
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.*;
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

    @Column(name = "first_name")
    @Size(min = 2, max = 15)
    @NotNull
    private String firstName;

    @Size(min = 2, max = 15)
    @Column(name = "last_name")
    @NotNull
    private String lastName;

    @Size(min = 2, max = 15)
    @NotNull
    @Column(name = "user_name")
    private String username;

    @Size(min = 2, max = 20)
    @Email
    @Column(name = "email")
    @NotNull
    private String email;

    @Size(min = 5)
    @Column(name = "password")
    @NotNull
    private String password;

    @Size(min = 2, max = 20)
    @Column(name = "address_line_1")
    private String addressLine1;

    @Size(min = 2, max = 20)
    @Column(name = "city")
    private String city;

    @Size(min = 2, max = 20)
    @Column(name = "state")
    private String state;

    @Size(min = 2, max = 20)
    @Column(name = "zip_code")
    private String zipCode;

}
