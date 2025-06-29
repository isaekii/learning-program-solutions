import static org.mockito.Mockito.*;
import org.junit.Test;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Arrange
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        // Act
        service.fetchData(); // This internally calls mockApi.getData()

        // Assert: Verify that getData() was called exactly once
        verify(mockApi).getData();
    }
}
