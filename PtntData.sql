CREATE DATABASE ptData_BD;

USE ptData_BD;

CREATE TABLE antigenFrequency{
    FirstName  VARCHAR (26) NOT NULl,
    LastName VARCHAR (26) NOT NULl,
    DOB VARCHAR (6) NOT NULl,
    HRN INT (6) AUTO INCREMET,
    Primary Key HRN
   
};