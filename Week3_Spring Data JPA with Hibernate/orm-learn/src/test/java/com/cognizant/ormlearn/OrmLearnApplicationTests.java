package com.cognizant.ormlearn;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
class OrmLearnApplicationTests {

	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplicationTests.class);

	@Autowired
	private CountryService countryService;

	@Autowired
	private CountryRepository countryRepository;

	@Test
	void contextLoads() {
		LOGGER.info("Testing if Spring context loads successfully");
		assertNotNull(countryService);
		assertNotNull(countryRepository);
	}

	@Test
	void testGetAllCountries() {
		LOGGER.info("Testing getAllCountries method");
		
		List<Country> countries = countryService.getAllCountries();
		
		assertNotNull(countries);
		assertThat(countries).isNotEmpty();
		
		LOGGER.debug("Retrieved {} countries from database", countries.size());
		
		for (Country country : countries) {
			LOGGER.debug("Country: {}", country);
			assertNotNull(country.getCode());
			assertNotNull(country.getName());
		}
	}

	@Test
	void testCountryRepository() {
		LOGGER.info("Testing CountryRepository directly");
		
		List<Country> countries = countryRepository.findAll();
		
		assertNotNull(countries);
		assertThat(countries).isNotEmpty();
		
		LOGGER.debug("Repository returned {} countries", countries.size());
		
		// Test if specific countries exist
		boolean indiaExists = countries.stream()
				.anyMatch(country -> "IN".equals(country.getCode()) && "India".equals(country.getName()));
		
		boolean usExists = countries.stream()
				.anyMatch(country -> "US".equals(country.getCode()) && "United States of America".equals(country.getName()));
		
		assertThat(indiaExists).isTrue();
		assertThat(usExists).isTrue();
		
		LOGGER.info("All expected countries found in database");
	}

	@Test
	void testCountryEntityMapping() {
		LOGGER.info("Testing Country entity mapping");
		
		Country country = new Country("TEST", "Test Country");
		
		assertNotNull(country);
		assertThat(country.getCode()).isEqualTo("TEST");
		assertThat(country.getName()).isEqualTo("Test Country");
		
		String countryString = country.toString();
		assertThat(countryString).contains("TEST");
		assertThat(countryString).contains("Test Country");
		
		LOGGER.debug("Country entity: {}", country);
	}

	@Test
	void testFindByIdFromRepository() {
		LOGGER.info("Testing findById from repository");
		
		// Test finding India
		var indiaOptional = countryRepository.findById("IN");
		
		assertThat(indiaOptional).isPresent();
		
		Country india = indiaOptional.get();
		assertThat(india.getCode()).isEqualTo("IN");
		assertThat(india.getName()).isEqualTo("India");
		
		LOGGER.debug("Found country by ID: {}", india);
		
		// Test finding non-existent country
		var nonExistentOptional = countryRepository.findById("XX");
		assertThat(nonExistentOptional).isEmpty();
		
		LOGGER.info("findById test completed successfully");
	}

}