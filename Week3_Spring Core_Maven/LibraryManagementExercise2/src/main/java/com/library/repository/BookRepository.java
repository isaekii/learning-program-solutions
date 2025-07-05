package com.library.repository;

public class BookRepository {
    
    public void saveBook(String bookName) {
        System.out.println("BookRepository: Saving book - " + bookName);
    }
    
    public void findAllBooks() {
        System.out.println("BookRepository: Finding all books");
    }
}