create database regvendor;

create table vendorReg(
    userid serial not null,
    v_name varchar(100)  not null,
    v_email varchar(150) primary key not null,
    v_age numeric not null,
    v_shop_name varchar(400) not null,
    v_shop_addr varchar(500) not null,
    v_resi_addr varchar(500) not null,
    v_passwd varchar(10) not null
);

alter table vendorReg
add column v_ph_num NUMERIC;


select email,password from vendorReg;

