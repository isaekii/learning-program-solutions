import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class DatabaseTest {

    private DatabaseConnection db;

    @Before
    public void setUp() {
        db = new DatabaseConnection();
        db.connect();
    }

    @After
    public void tearDown() {
        db.disconnect();  // Teardown method
    }

    @Test
    public void testConnectionStatus() {
        assertTrue(db.getStatus());  // should be true
    }
}
