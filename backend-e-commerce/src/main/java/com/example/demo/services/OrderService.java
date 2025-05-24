package com.example.demo.services;

import java.util.List;

import com.example.demo.exception.OrderException;
import com.example.demo.model.Address;
import com.example.demo.model.Order;
import com.example.demo.model.User;

public interface OrderService {

	public Order createOrder(User user, Address shippingAddress); // 
	
	public Order findOrderById(Long orderId) throws OrderException;
	
	public List<Order> usersOrderHistory(Long userId); // 
	
	public Order placedOrder(Long orderId) throws OrderException; // admin
	
	public Order confirmedOrder(Long orderId) throws OrderException; // admin
	
	public Order shippedOrder(Long orderId) throws OrderException; //admin
	
	public Order deliveredOrder(Long orderId) throws OrderException; //admin
	
	public Order cancledOrder(Long orderId) throws OrderException; // both user and admin
	
	public List<Order>getAllOrders(); //Admin
	
	public void deleteOrder(Long orderId) throws OrderException;
	
}
