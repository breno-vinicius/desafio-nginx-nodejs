CREATE DATABASE db
  CHARACTER SET utf8
  COLLATE utf8_general_ci;

USE db;

CREATE TABLE people (
	id BIGINT UNSIGNED auto_increment NOT NULL,
	name varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	CONSTRAINT people_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;
