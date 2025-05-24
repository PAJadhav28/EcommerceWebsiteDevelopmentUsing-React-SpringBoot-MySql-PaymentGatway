package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.JwtProvider;
import com.example.demo.exception.UserException;
import com.example.demo.model.Cart;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.request.LoginRequest;
import com.example.demo.response.AuthResponse;
import com.example.demo.services.CartService;
import com.example.demo.services.CustomeUserServiceImplementation;

@RestController
@RequestMapping("/auth")
//@CrossOrigin(origins = "http://localhost:3000")

public class AuthController {
	
	private JwtProvider jwtProvider;
	private UserRepository userRepository;
	private PasswordEncoder passwordEncoder;
	private CustomeUserServiceImplementation customeUserService;
	private CartService cartService;
	
	public AuthController(UserRepository userRepository, CustomeUserServiceImplementation customeUserService, PasswordEncoder passwordEncoder, 
			JwtProvider jwtProvider, CartService cartService ){
		this.userRepository = userRepository;
		this.customeUserService = customeUserService;
		this.passwordEncoder = passwordEncoder;
		this.jwtProvider = jwtProvider;
		this.cartService = cartService;;
	}
	
//	SignUp method
	@PostMapping("/signup")
	public ResponseEntity<AuthResponse>createUserHandler(@RequestBody User user) throws UserException{
		String email = user.getEmail();
		String password = user.getPassword();
		String firstName = user.getFirstName();
		String lastName = user.getLastName();
		
		User isEmailExist = userRepository.findByEmail(email);
		
		if(isEmailExist != null) {
			throw new UserException("Email Is Already Used With Another Account ");
		}
		
		
		User createdUser = new User();
		createdUser.setEmail(email);
		createdUser.setPassword(passwordEncoder.encode(password)); //encoded password
		createdUser.setFirstName(firstName);
		createdUser.setLastName(lastName);
		
		User SavedUser = userRepository.save(createdUser);
		Cart cart = cartService.createCart(SavedUser);
		Authentication
		authentication = new UsernamePasswordAuthenticationToken(SavedUser.getEmail(), SavedUser.getPassword());
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String token = jwtProvider.generateToken(authentication);
		
		AuthResponse authResponse = new AuthResponse();
		authResponse.setJwt(token);
		authResponse.setMessage("Signup Successfull");
		
		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
	}
	
//	Login method
	@PostMapping("/signin")
	public ResponseEntity<AuthResponse>loginUserHandler(@RequestBody LoginRequest loginRequest){
		
		String userName = loginRequest.getEmail();
		String password = loginRequest.getPassword();
		
		Authentication authentication = authenticate(userName, password);  
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String token = jwtProvider.generateToken(authentication);
		
		AuthResponse authResponse = new AuthResponse();
		authResponse.setJwt(token);
		authResponse.setMessage("Signin Successfull");
		
		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
		
	}

private Authentication authenticate(String userName, String password) {
	
	UserDetails userDetails = customeUserService.loadUserByUsername(userName);
	
	if(customeUserService == null) {
		throw new BadCredentialsException("Invalid Username..." );
	}
	
	if(!passwordEncoder.matches(password, userDetails.getPassword())) {
		throw new BadCredentialsException("Invalid Password...");	
	}
	return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
}
	

}

