public class DatabaseConnection {
    public boolean isConnected = false;

    public void connect() {
        isConnected = true;
        System.out.println("Connected to DB");
    }

    public void disconnect() {
        isConnected = false;
        System.out.println("Disconnected from DB");
    }

    public boolean getStatus() {
        return isConnected;
    }
}
