package com.example.demo.controller;

import java.util.Random;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/flips")
public class Checks2Controller {
	
	
	@GetMapping("/flip")
	public int flip() {
		int[] arr = {1,2};
		Random r = new Random();
		int randomNum = r.nextInt(arr.length);
		return arr[randomNum];
		
	}

}
