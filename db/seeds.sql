USE burgers_db;

INSERT INTO burgers (id, burger_name, devoured) 
VALUES (1, "Portabella Burger", true), (2, "Bacon Cheeseburger", false),
(3, "Turkey Burger", true), (4, "Chilli Burger", true), (5, "Patty Melt", true), 
(6, "Salmon Burger", false), (7, "Bunless Burger", true), (8, "Hamburger", true), 
(9, "Meat-less Burger", false);

SELECT * FROM burgers;