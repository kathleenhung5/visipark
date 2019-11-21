DROP TABLE IF EXISTS units;
DROP TABLE IF EXISTS visitors;
DROP TABLE IF EXISTS reports;

CREATE TABLE units (
num INT(3),
plate VARCHAR(7),
activated BOOLEAN,
PRIMARY KEY (num) 
);

CREATE TABLE visitors (
id INT NOT NULL AUTO_INCREMENT,
unit_num INT(3),
    FOREIGN KEY (unit_num) 
    REFERENCES units(num)
    ON UPDATE CASCADE ON DELETE RESTRICT,
name VARCHAR(255),
plate VARCHAR(7),
start_time TIMESTAMP,
end_time VARCHAR(255),
removed BOOLEAN,
pin BOOLEAN,
PRIMARY KEY (id)
);


CREATE TABLE reports (
unit_num INT(3),
    FOREIGN KEY (unit_num) 
    REFERENCES units(num)
    ON UPDATE CASCADE ON DELETE RESTRICT,
created TIMESTAMP,
subject VARCHAR(255),
message TEXT,
deleted BOOLEAN
);

