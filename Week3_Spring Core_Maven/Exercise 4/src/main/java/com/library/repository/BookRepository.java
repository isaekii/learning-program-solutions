package com.library.repository;

import java.util.ArrayList;
import java.util.List;

public class BookRepository {
    
    private List<String> books;
    
    public BookRepository() {
        books = new ArrayList<>();
        books.add("Spring in Action");
        books.add("Java Programming");
        books.add("Maven Guide");
    }
    
    public void saveBook(String bookName) {
        System.out.println("BookRepository: Saving book - " + bookName);
        books.add(bookName);
    }
    
    public void findAllBooks() {
        System.out.println("BookRepository: Finding all books");
        for (String book : books) {
            System.out.println("Book: " + book);
        }
    }
    
    public void findBookByName(String bookName) {
        System.out.println("BookRepository: Finding book - " + bookName);
        for (String book : books) {
            if (book.toLowerCase().contains(bookName.toLowerCase())) {
                System.out.println("Found: " + book);
                return;
            }
        }
        System.out.println("Book not found: " + bookName);
    }
}