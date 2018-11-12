USE lppivj8kzgh8ivhj;

CREATE TABLE friends(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
photo VARCHAR(50) NOT NULL,
scores VARCHAR(50) NOT NULL,

PRIMARY KEY(id)
);

SELECT * FROM friends;

INSERT INTO friends(name, photo, scores)
VALUES("Sun", "https://goo.gl/images/T3hZxM", "5,5,1,1,5,1,2,1,5,4");

INSERT INTO friends(name, photo, scores)
VALUES("Moon", "https://goo.gl/images/VRKjoP", "4,3,5,6,5,1,2,2,5,1");