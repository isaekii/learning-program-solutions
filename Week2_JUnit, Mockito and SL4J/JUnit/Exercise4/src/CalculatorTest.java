import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    // Setup method - runs before each test
    @Before
    public void setUp() {
        calc = new Calculator(); // Test fixture
        System.out.println("Setup complete");
    }

    // Teardown method - runs after each test
    @After
    public void tearDown() {
        calc = null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 2;
        int b = 3;

        // Act
        int result = calc.add(a, b);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = calc.subtract(a, b);

        // Assert
        assertEquals(2, result);
    }
}
