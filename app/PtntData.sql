CREATE DATABASE patientData_BD;

USE patientData_BD;

CREATE TABLE patientRecords
(   HRN INT (6) NOT NULL  AUTO_INCREMENT,
    FirstName  VARCHAR (26) NOT NULl,
    LastName VARCHAR (26) NOT NULl,
    birth DATE  VARCHAR (6) NOT NULl,
    Antibodies VARCHAR (4) NOT NULL,
   PRIMARY KEY (HRN)
   
);

INSERT INTO patientRecords(FirstName,LastName,birth,Antibodies)
VALUES ("kristen", "Bell", 19800520, "K");

INSERT INTO patientRecords(FirstName,LastName,birth,Antibodies)
VALUES ("Zoe","Kravitz", 19881201,"c, E");

-- INSERT INTO patientRecords(FirstName,LastName,birth,Antibodies)
-- VALUES ("Lisa","Lopes", 1988614,"S, Jka");

-- INSERT INTO patientRecords(FirstName,LastName,birth,Antibodies)
-- VALUES ("Ginger","Nim", 19400711);

-- INSERT INTO patientRecords(FirstName,LastName,birth,Antibodies)
-- VALUES ("Steve","Jobs", 19550224);


CREATE TABLE antigenFrequency(
    Antigen VARCHAR (3) NOT NULL,
    FrequencyWhites INT (3) NOT NULL,
    FrequencyBlacks INT (3) NOT NULL,
);

--  WORKING OFF THE ODD THAT THE ANTIGEN IS NOT PRESENT , USING ANTIGEN NEGATIVE FREQUENCY


INSERT INTO antigenFrequency (Antigen,FrequencyWhites,FrequencyBlacks)
VALUES ("D",85,92);

INSERT INTO antigenFrequency (Antigen,FrequencyWhites,FrequencyBlacks)
VALUES ("C",68,27);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(E,29,22);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(c,80,96);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(e,98,98);

-- ^^^^^^^flip values to negative FOR CALCULATION
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(M,21,26);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(N,30,25);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(S,48,68);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(s,48,68);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(K,91,98);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(k,.2,1);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(kpa,97.7,100);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(Jsa,100,80);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(Fya,32,20);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(Fyb,20,10);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(Jka,24,8);
INSERT INTO antigenFrequency(Antigen,FrequencyWhites,FrequencyBlacks)
VALUES(Jkb,26,52);

