import React, { useContext } from "react";
import Transactions from "./Transactions";
import GlobalContext from "../context/globalState";

const TranscationList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TranscationList;
