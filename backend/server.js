const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middle ware
app.use(cors());
app.use(express.json());


app.post("/vendorReg", async (req, res) => {
  try {
    const { v_name } = req.body;
    const { v_email } = req.body;
    const { v_age } = req.body;
    const { v_shop_name } = req.body;
    const { v_shop_addr } = req.body;
    const { v_resi_addr } = req.body;
    const { v_passwd } = req.body;
    const { v_ph_num } = req.body;

    const reg = await pool.query(
      "INSERT INTO vendorReg (v_name,v_email,v_age,v_shop_name,v_shop_addr,v_resi_addr,v_passwd,v_ph_num) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
      [
        v_name,
        v_email,
        v_age,
        v_shop_name,
        v_shop_addr,
        v_resi_addr,
        v_passwd,
        v_ph_num,
      ]
    );
    res.json(reg.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, (req, res) => {
  console.log("Server working!");
});
