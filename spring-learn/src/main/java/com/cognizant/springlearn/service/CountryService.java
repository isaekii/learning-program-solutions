package com.cognizant.springlearn.service;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    public Country getCountry(String code) throws CountryNotFoundException {
        LOGGER.info("START");
        LOGGER.debug("Searching for country with code: {}", code);
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        @SuppressWarnings("unchecked")
        List<Country> countries = context.getBean("countryList", List.class);
        Country foundCountry = countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new CountryNotFoundException());
        LOGGER.debug("Country found: {}", foundCountry);
        LOGGER.info("END");
        return foundCountry;
    }
}