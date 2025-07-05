package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    
    private BookRepository bookRepository;
    
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    
    public void displayBooks() {
        System.out.println("BookService: Displaying books");
        bookRepository.findAllBooks();
    }
    
    public void addBook(String bookName) {
        System.out.println("BookService: Adding book - " + bookName);
        bookRepository.saveBook(bookName);
    }
    
    public void searchBook(String bookName) {
        System.out.println("BookService: Searching for book - " + bookName);
        bookRepository.findBookByName(bookName);
    }
}