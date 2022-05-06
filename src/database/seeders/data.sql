use Almacen;

INSERT INTO marcas VALUES (1,'Samsung'),(2,'LG'),(3,'Sony'),
(4,'Panasonic'),(5,'Apple'),(6,'Dell'),(7,'Lenovo'),(8,'HP'),
(9,'Asus'),(10,'Flexi'),(11,'Cuadra'),(12,'Charly'),(13,'Fabián Arenas'),
(14,'Panam');

INSERT INTO categorias VALUES (1, 'Televisiones'), (2, 'Laptops'), (3, 'Zapatos');

INSERT INTO atributos_uno VALUES (1,'LED'),(2,'LCD'),(3,'OLED'), (4, 'Intel'), (5, 'AMD'), (6, 'Piel'),
(7, 'Plástico');

INSERT INTO atributos_dos VALUES (1,'28 pulgadas'), (2,'32 pulgadas'), (3,'40 pulgadas'),
(4, '8 RAM'), (5, '16 RAM'), (6, '32 RAM'), (7, '5'), (8, '6'), (9, '7'), (10, '8');

INSERT INTO productos VALUES (1,'Pantalla Samsung 40"', 0001, 9000, 'samsung.jpg', 1, 1),
(2,'Laptop ASUS 15 pulgadas', 0002, 9849, 'asus.jpg', 2, 9),
(3,'Flexi Bowie Casual', 0003, 849, 'Suede.jpg', 3, 10);

INSERT INTO categorias_atributos VALUES (1, 1, 1, 2, 1),
(2, 2, 4, 4, 2), (3, 3, 6, 8, 3);

INSERT INTO productos VALUES (4,'Pantalla LG 32"', 0004, 8000, 'LG.jpg', 1, 2),
(5,'Laptop Dell 15 pulgadas', 0005, 9849, 'dell.jpg', 2, 6),
(6,'Tenis Charly', 0006, 749, 'charly.jpg', 3, 12);

INSERT INTO productos VALUES (7,'Pantalla Sony 32"', 0007, 8000, 'sony.jpg', 1, 3),
(8,'Macbook Pro 15 pulgadas', 0008, 9950, 'apple.jpg', 2, 5),
(9,'Casual Flexi hombre', 0009, 949, 'botas.jpg', 3, 10);