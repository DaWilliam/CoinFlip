package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/conditions")
public class ConditionController {
	
	@Autowired
	private RestTemplate rt;
	
	@GetMapping("/answer/{flipNum}")
	public ResponseEntity<?> answer(@PathVariable("flipNum") Integer flipNums) {

		if(flipNums == 1) {
			return new ResponseEntity<String>("Heads", HttpStatus.OK);
		} 
		
		return new ResponseEntity<String>("Tails", HttpStatus.OK);
	}
	

}
