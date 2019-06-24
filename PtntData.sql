CREATE DATABASE patientData_BD;

USE patientData_BD;

CREATE TABLE patientRecords{
    FirstName  VARCHAR (26) NOT NULl,
    LastName VARCHAR (26) NOT NULl,
    DATE  VARCHAR (6) NOT NULl,
    HRN INT (6) AUTO INCREMET,
    Primary Key HRN
   
};

INSERT INTO patientRecords
VALUES (kristen, Bell, 1980/05/20);

INSERT INTO patientRecords
VALUES (Zoe,Kravitz, 1988/12/01);

INSERT INTO patientRecords
VALUES (Lisa,Lopes, 1988/12/01);

INSERT INTO patientRecords
VALUES (Ginger,Nim, 1940/07/11);

INSERT INTO patientRecords
VALUES (Steve,Jobs, 1955/02/24);

INSERT INTO patientRecords
VALUES (Zac, Brown, 1978/07/);

