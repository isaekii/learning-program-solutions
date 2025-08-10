package com.cognizant.account;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AccountController {

    @GetMapping("/accounts/{number}")
    public ResponseEntity<Map<String, Object>> getAccount(@PathVariable String number) {
        return ResponseEntity.ok(Map.of(
                "number", "00987987973432",
                "type", "savings",
                "balance", 234343
        ));
    }
}