import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;

public class Logger {
    private static Logger instance;
    private PrintWriter fileWriter;
    
    private Logger() {
        if (instance != null) {
            throw new RuntimeException("Use getInstance() to get the Logger instance.");
        }
        try {
            fileWriter = new PrintWriter(new FileWriter("app.log", true));
        } catch (Exception e) {
            throw new RuntimeException("Failed to initialize file logging: " + e.getMessage());
        }
    }
    
    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }
    
    public void log(String message) {
        String timestamp = LocalDateTime.now().toString();
        System.out.println("Log: " + timestamp + " - " + message);
        fileWriter.println(timestamp + " - " + message);
        fileWriter.flush();
    }
    
    public void close() {
        fileWriter.close();
    }
}