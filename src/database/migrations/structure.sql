CREATE DATABASE Almacen; 

use Almacen; 

CREATE TABLE marcas
 (
 id_marcas int primary key not null auto_increment,
 name varchar (100) not null
 );
 
 CREATE TABLE categorias
 (
 id_categorias int primary key not null auto_increment,
 name varchar (100) not null
 );
 
 CREATE TABLE atributos_uno
 (
 id_atributos_uno int primary key not null auto_increment,
 name varchar (45) not null
 );
 
 CREATE TABLE atributos_dos
 (
 id_atributos_dos int primary key not null auto_increment,
 name varchar (45) not null
 );
 
  CREATE TABLE productos
 (
 id_productos int primary key not null auto_increment,
 nombre varchar (100) not null,
 sku int not null,
 precio decimal(4,0),
 imagen varchar(45),
 id_categori int not null,
 id_marca int not null,
 CONSTRAINT categori FOREIGN KEY (id_categori) REFERENCES categorias (id_categorias),
 CONSTRAINT marca FOREIGN KEY (id_marca) REFERENCES marcas (id_marcas)
 );
 
 CREATE TABLE categorias_atributos 
 (
	id_cat_atribut int primary key not null auto_increment,
    id_categ int not null,
    id_atrib1 int not null,
    id_atrib2 int not null,
    id_product int not null,
    constraint categ foreign key (id_categ) references categorias (id_categorias),
    constraint atrib1 foreign key (id_atrib1) references atributos_uno (id_atributos_uno),
    constraint atrib2 foreign key (id_atrib2) references atributos_dos (id_atributos_dos),
    constraint product foreign key (id_product) references productos (id_productos)
 );