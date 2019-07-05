CREATE DATABASE patientData_BD;

USE patientData_BD;

CREATE TABLE patientRecords
(   HRN INT (6) NOT NULL  AUTO_INCREMENT,
    FirstName  VARCHAR (26) NOT NULl,
    LastName VARCHAR (26) NOT NULl,
    DATE  VARCHAR (6) NOT NULl,
   PRIMARY KEY (HRN)
   
);

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


CREATE TABLE antigenFrequency(
    Antigen VARCHAR (3) NOT NULL,
    Frequency Whites INT (3) NOT NULL,
    Frequency Blacks INT (3) NOT NULL,
);

--  WORKING OFF THE ODD THAT THE ANTIGEN IS NOT PRESENT , USING ANTIGEN NEGATIVE FREQUENCY


INSERT INTO antigenFrequency 
VALUES (D,85,92);
INSERT INTO antigenFrequency 
VALUES (C,68,27);
INSERT INTO antigenFrequency
VALUES(E,29,22);
INSERT INTO antigenFrequency
VALUES(c,80,96);
INSERT INTO antigenFrequency
VALUES(e,98,98);

-- ^^^^^^^flip values to negative FOR CALCULATION
INSERT INTO antigenFrequency
VALUES(M,21,26);
INSERT INTO antigenFrequency
VALUES(N,30,25);
INSERT INTO antigenFrequency
VALUES(S,48,68);
INSERT INTO antigenFrequency
VALUES(s,48,68);
INSERT INTO antigenFrequency
VALUES(K,91,98);
INSERT INTO antigenFrequency
VALUES(k,.2,1);
INSERT INTO antigenFrequency
VALUES(kpa,97.7,100);
INSERT INTO antigenFrequency
VALUES(Jsa,100,80);
INSERT INTO antigenFrequency
VALUES(Fya,32,20);
INSERT INTO antigenFrequency
VALUES(Fyb,20,10);
INSERT INTO antigenFrequency
VALUES(Jka,24,8);
INSERT INTO antigenFrequency
VALUES(Jkb,26,52);

