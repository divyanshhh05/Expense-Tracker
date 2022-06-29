import React from "react";

import "./App.css";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpenses from "./components/incomeexpenses";
import TranscationList from "./components/transactionList";
import AddTransaction from "./components/addTransaction";
import { GlobalProvider } from "./context/globalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TranscationList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
