package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    
    public static void main(String[] args) {
        System.out.println("Starting Library Management Application...");
        
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        
        BookService bookService = context.getBean("bookService", BookService.class);
        
        System.out.println("\nTesting Maven Project Configuration:");
        bookService.displayBooks();
        bookService.addBook("Spring Boot Guide");
        bookService.searchBook("Spring");
        bookService.displayBooks();
        
        System.out.println("\nMaven Project Configuration Test Complete!");
    }
}