package com.revature.cardfans.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.revature.cardfans.models.Product;

@Repository
public interface ProductDao extends JpaRepository<Product, Integer> {

}