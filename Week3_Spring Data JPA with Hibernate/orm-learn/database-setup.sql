-- Create schema
CREATE SCHEMA IF NOT EXISTS ormlearn;

-- Use the schema
USE ormlearn;

-- Create country table
CREATE TABLE country (
    co_code VARCHAR(2) PRIMARY KEY,
    co_name VARCHAR(50) NOT NULL
);

-- Insert sample data
INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');