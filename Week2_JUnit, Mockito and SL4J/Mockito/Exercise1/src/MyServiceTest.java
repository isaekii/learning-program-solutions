import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;
import org.junit.Test;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Arrange: Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub method to return fixed value
        when(mockApi.getData()).thenReturn("Mock Data");

        // Act: Inject mock into service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert: Verify result
        assertEquals("Mock Data", result);
    }
}
