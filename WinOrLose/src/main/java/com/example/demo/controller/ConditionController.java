package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/conditions")
public class ConditionController {
	
	@Autowired
	private RestTemplate rt;
	
	@GetMapping("/answer/{flipNum}")
	public ResponseEntity<String> answer(@PathVariable("flipNum") Integer flipNums) {
		Integer num = rt.getForObject("http://localhost:8081/flips/flip", Integer.class);
		ResponseEntity<Integer> number = rt.getForEntity("http://localhost:8081/flips/flip", Integer.class);
		if(num == 1) {
			return new ResponseEntity<String>("Heads", HttpStatus.OK);
		} 
		return new ResponseEntity<String>("Tails", HttpStatus.OK);
	}
	

}
