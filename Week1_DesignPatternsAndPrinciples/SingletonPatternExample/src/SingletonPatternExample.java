public class SingletonPatternExample {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        
        System.out.println("Same instance? " + (logger1 == logger2));
        
        logger1.log("Message from logger1");
        logger2.log("Message from logger2");
        
        System.out.println("Logger1 hash: " + logger1.hashCode());
        System.out.println("Logger2 hash: " + logger2.hashCode());
        
        logger1.close();
    }
}