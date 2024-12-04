create database userappdb ;
use userappdb;

create table user 
(
id integer auto_increment primary key,
uname varchar(100) not null,
email varchar (50),
country varchar (50),
passwd varchar (20) not null
);

create database userappdb;
use userappdb;

CREATE TABLE transactions (
    transaction_id VARCHAR(255) PRIMARY KEY,
    amount DOUBLE NOT NULL,
    merchant VARCHAR(255) NOT NULL,
    time DATETIME NOT NULL,
    location VARCHAR(255),
    is_fraudulent BOOLEAN
);

-- Creating Configuration table
CREATE TABLE configuration (
    config_id INT AUTO_INCREMENT PRIMARY KEY,
    threshold DOUBLE NOT NULL,
    algorithm_params VARCHAR(255) -- Could store serialized JSON or delimited key-value pairs
);

-- Creating Algorithm Parameters table
CREATE TABLE algorithm_parameters (
    param_id INT AUTO_INCREMENT PRIMARY KEY,
    param_name VARCHAR(255) NOT NULL,
    param_value DOUBLE NOT NULL,
    last_updated DATETIME NOT NULL
);

-- Creating Detection Reports table
CREATE TABLE detection_reports (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_id VARCHAR(255),
    fraud_probability DOUBLE NOT NULL,
    decision VARCHAR(50) NOT NULL,
    report_time DATETIME NOT NULL,
    FOREIGN KEY (transaction_id) REFERENCES transactions(transaction_id)
);