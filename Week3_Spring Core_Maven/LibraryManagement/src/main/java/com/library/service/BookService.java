package com.library.service;

public class BookService {
    
    public void displayBooks() {
        System.out.println("BookService: Displaying books");
    }
    
    public void addBook(String bookName) {
        System.out.println("BookService: Adding book - " + bookName);
    }
}