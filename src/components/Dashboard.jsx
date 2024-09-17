import React from "react";

const Dashboard = ({ transactions }) => {
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

  const expence = transactions
    .filter((transcation) => transcation.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

  const balance = transactions.reduce((p, c) => p + c.amount, 0);

  return (
    <div className="row g-3 my-3">
      <div className="col-sm-12 col-md-4">
        <div className="card p-3 rounded-0 bg-success text-light">
          <h1 className="display-6">Income : {income} </h1>
          <h1 className="display-1"> </h1>
        </div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="card p-3 rounded-0 bg-danger text-light">
          <h1 className="display-6">Expense : {expence} </h1>
          <h1 className="display-1"></h1>
        </div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="card p-3 rounded-0 bg-primary text-light">
          <h1 className="display-6">Balance : {balance}</h1>
          <h1 className="display-1"></h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
