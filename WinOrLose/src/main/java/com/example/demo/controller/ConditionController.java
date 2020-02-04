package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class ConditionController {
	
	@Autowired
	private RestTemplate rt;
	
	@GetMapping("/answer")
	public String answer() {
		Integer number = rt.getForObject("http://localhost:8081/flips/flip", Integer.class);
		if(number == 1) {
			return "heads";
		} 
		return "tails";
	}
	

}
