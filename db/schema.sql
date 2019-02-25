CREATE DATABASE burgers_db;

use burgers_db;

create table burgers(

    id INT auto_increment primary key,
    burger_name varchar(100),
    devoured boolean

);