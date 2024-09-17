import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "Salary",
      amount: 60000,
    },
    {
      id: 2,
      text: "Rent",
      amount: -10000,
    },
  ]);

  //store the previous data
  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  //add transaction
  const addTransaction = (text, amount) => {
    const newTranscation = {
      id: crypto.randomUUID(),
      text: text,
      amount: +amount,
    };
    setTransactions([newTranscation, ...transactions]); //setransaction add whole the data in the form of object, ...transactions
  };

  //removetranscation
  const removetranscation = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id)); // using fillter
  };

  // edittransaction
  const edittransaction = (transactions) => {
    setEdit({
      transaction: transactions,
      isEdit: true,
    });
  };

  // updatetransaction
  const updatetransaction = (updatedtransaction) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === updatedtransaction.id
          ? updatedtransaction
          : transaction
      )
    );

    setEdit({
      transaction : {},
      isEdit : false
    })
  };
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Dashboard transactions={transactions} />
        <Form
          addTransaction={addTransaction}
          edit={edit}
          updatetransaction={updatetransaction}
        />
        <ListGroup
          transactions={transactions}
          removetranscation={removetranscation}
          edittransaction={edittransaction}
        />
      </div>
    </>
  );
};

export default App;
