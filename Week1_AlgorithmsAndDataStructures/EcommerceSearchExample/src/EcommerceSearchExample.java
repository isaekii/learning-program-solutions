
import java.util.Arrays;

public class EcommerceSearchExample {
    public static void main(String[] args) {
        Product[] products = {
            new Product(3, "Laptop", "Electronics"),
            new Product(1, "Phone", "Electronics"),
            new Product(4, "Shirt", "Clothing"),
            new Product(2, "Book", "Books")
        };

        Product[] sortedProducts = products.clone();
        Arrays.sort(sortedProducts);

        System.out.println("Linear Search:");
        Product result1 = SearchAlgorithms.linearSearch(products, 2);
        System.out.println(result1 != null ? result1 : "Product not found");

        System.out.println("\nBinary Search:");
        Product result2 = SearchAlgorithms.binarySearch(sortedProducts, 2);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}