package com.cognizant.loan;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class LoanController {

    @GetMapping("/loans/{number}")
    public ResponseEntity<Map<String, Object>> getLoan(@PathVariable String number) {
        return ResponseEntity.ok(Map.of(
                "number", "H00987987972342",
                "type", "car",
                "loan", 400000,
                "emi", 3258,
                "tenure", 18
        ));
    }
}