const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { rows } = require("pg/lib/defaults");

//middle ware
app.use(cors());
app.use(express.json());

app.post("/vendorReg", async (req, res) => {
  try {
    const { name } = req.body;
    const { email } = req.body;
    const { age } = req.body;
    const { shopName } = req.body;
    const { shopAddr } = req.body;
    const { resiAddr } = req.body;
    const { passwd } = req.body;
    const { phNum } = req.body;

    console.log(req.body);
    const reg = await pool.query(
      "INSERT INTO vendorReg (v_name,v_email,v_age,v_shop_name,v_shop_addr,v_resi_addr,v_passwd,v_ph_num) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
      [name, email, age, shopName, shopAddr, resiAddr, passwd, phNum]
    );
    res.json(reg.rows[0]);
    console.log(res.json(rows[0]).status);
  } catch (err) {
    console.error(err.message)
  }
});

app.get("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const { passwd } = req.body;

    console.log(req.body);
    const reg = await pool.query(
      "SELECT v_email,v_passwd FROM vendorReg WHERE v_email=($1) AND v_passwd=($2)",
      [email, passwd]
    );
    res.json(reg.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, (req, res) => {
  console.log("Server working!");
});
