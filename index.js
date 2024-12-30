/**
 * commen js/ module js
 * express() ye ek top level function hai jise hum express module se import kar rahe hai
 */
const express = require("express");
/**
 * express() method ko USE KARKE humNE ek app variable BANAYA HAI JO APNE AAP ME KAAFI POWERFULL HAI.
 * ISSE HUM EXPRESS KE SARE METHODS KO RUN KAR SAKTE HAI
 */
require("dotenv").config();

const app = express();
/**
 * ye wo port hai jis per server run hoga arthat server get request ko listen/response karega
 * SERVER KO LISTEN KARNE KE LIYE EK PORT PROVIDE KAR DIYA
 */
const port = 5500;

/**
 * app.get() express methods hai data/request sent karne ke liye use kiya jata hai
 * YAHA PER APP KO BOLA GAYA KI "/" JO KI HOME ROUTE HAI WAHA PE LISTEN KARO AGAR YAHA KO REQUEST AATI HAI TO EK  CALLBACK RETURN KARO
 */
app.get("/", (req, res) => {
  res.send(
    "<h1>Hello Kailash, Congratulations, Ha Ha, Tumne Apna Pehla Node Js Server bana Liya</h1>"
  );
});
app.get("/login", (req, res) => {
  res.send("<h1>Mera Bachha, Ab aa hi gaye ho to login bhi karlo, </h1>");
});
app.get("/twitter", (req, res) => {
  res.send(`<h1>Hello , Me Twitter Hu</h1>`);
});
app.get("/youtube", (req, res) => {
  res.send("<h1>https://www.youtube.com/@ThekailashParihar</h1>");
});
/**
 * app.listen() express method hai jo server per aayi hui get request ko listen/response karta hai
 */
app.listen(process.env.PORT, () => {
  console.log(`Server Start on port ${port} , visit http://localhost:${port}/`);
  console.log(`Kailash`);
});
