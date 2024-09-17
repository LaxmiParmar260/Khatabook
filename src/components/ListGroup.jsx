import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ transactions, removetranscation, edittransaction}) => {
  return (
    <>
      <p className="text-secondary">Transactions : </p>
      <ul className="list-group my-3">
        {transactions.map((transaction) => (
          <ListItem transaction={transaction} key={transaction.id} removetranscation={removetranscation}  edittransaction={ edittransaction}/>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
