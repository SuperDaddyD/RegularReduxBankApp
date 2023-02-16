import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

function App() {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const account = useSelector((state) => {
    console.log("The State", state);
    return state.account;
  });

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <div>
        <h1>{account}</h1>

        <input
          value={amount}
          onChange={(e) => {
            setAmount(parseInt(e.target.value));
          }}
          type="text"
        />

        <button
          onClick={() => {
            depositMoney(amount);
            setAmount(parseInt(0));
          }}
        >
          Deposit
        </button>
        <button
          onClick={() => {
            withdrawMoney(amount);
            setAmount(parseInt(0));
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default App;
