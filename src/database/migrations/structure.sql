CREATE DATABASE Almacen; 

use Almacen; 

CREATE TABLE marcas
 (
 id_marcas int primary key not null auto_increment,
 name varchar (45) not null
 );
 
 CREATE TABLE categorias
 (
 id_categorias int primary key not null auto_increment,
 name varchar (45) not null
 );
 
 CREATE TABLE televisiones
 (
 id_televisiones int primary key not null auto_increment,
 id_categoria int not null,
 tipo varchar (45) not null,
 tamano numeric,
 CONSTRAINT categoria FOREIGN KEY (id_categoria) REFERENCES categorias (id_categorias)
 );
 
  CREATE TABLE zapatos
 (
 id_zapatos int primary key not null auto_increment,
 id_categ int not null,
 material varchar (45) not null,
 numero numeric,
 CONSTRAINT categ FOREIGN KEY (id_categ) REFERENCES categorias (id_categorias)
 );
 
  CREATE TABLE laptos
 (
 id_laptops int primary key not null auto_increment,
 id_catego int not null,
 procesador varchar (45) not null,
 memoria numeric,
 CONSTRAINT catego FOREIGN KEY (id_catego) REFERENCES categorias (id_categorias)
 );
 
  CREATE TABLE productos
 (
 id_productos int primary key not null auto_increment,
 nombre varchar (45) not null,
 sku numeric not null,
 precio decimal(4,0),
 imagen varchar(45),
 id_categori int not null,
 id_marca int not null,
 CONSTRAINT categori FOREIGN KEY (id_categori) REFERENCES categorias (id_categorias),
 CONSTRAINT marca FOREIGN KEY (id_marca) REFERENCES marcas (id_marcas)
 );