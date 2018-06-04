const express = require('express');
const app =express ();
const sqlite = require('sqlite3').verbose();

const db = new sqlite3.DataBase('./chinook.db');


db.each('SELECT * from artists LIMIT 100',  (err, row) => {
    if (err) throw err;
    console.log(row);
});

db.close();

