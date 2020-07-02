import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "../components/Transaction";

const TransactionList = () => {
  // pass the transactions data
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          // console.log(transaction)
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
