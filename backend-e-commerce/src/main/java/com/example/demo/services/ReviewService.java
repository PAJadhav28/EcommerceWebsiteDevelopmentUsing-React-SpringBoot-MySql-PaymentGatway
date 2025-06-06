package com.example.demo.services;


import java.util.List;

import com.example.demo.exception.ProductException;
import com.example.demo.model.Review;
import com.example.demo.model.User;
import com.example.demo.request.ReviewRequest;


public interface ReviewService {

	public Review createReview(ReviewRequest req, User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
