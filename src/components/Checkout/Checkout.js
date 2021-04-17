import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Grid } from "@material-ui/core";

const Checkout = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  let history = useHistory();
  const handleOrders = () => {
    const { imageURL, name, price, quantity } = product;
    const newOrders = {
      ...loggedInUser,
      imageURL,
      name,
      price,
      quantity,
      ...selectedDate,
    };
    fetch("/addOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/orders");
      });
  };

  const handleCheckInDate = (date) => {
    const newDate = { ...selectedDate };
    newDate.checkIn = date;
    setSelectedDate(newDate);
  };

  const handleCheckOutDate = (date) => {
    const newDate = { ...selectedDate };
    newDate.checkOut = date;
    setSelectedDate(newDate);
  };
  return (
    <div
      style={{
        marginTop: "20px",
        height: "300px",
        width: "300px",
        margin: "0 auto",
      }}
    >
      <Card className="mt-5 text-center">
        <Card.Header>Checkout</Card.Header>
        <Card.Body>
          <Card.Title>Name : {product.name}</Card.Title>
          <Card.Text>
            Price : {product.price}, Quantity : {product.quantity}
          </Card.Text>
        </Card.Body>
      </Card>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePickerformat
            forrmat="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Check In Date"
            value={selectedDate.checkIn}
            onChange={handleCheckInDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Check Out Date"
            format="MM/dd/yyyy"
            value={selectedDate.checkOut}
            onChange={handleCheckOutDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <div className="text-center">
        <button
          className="btn btn-danger"
          style={{ textDecoration: "none", width: "270px" }}
          onClick={handleOrders}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
