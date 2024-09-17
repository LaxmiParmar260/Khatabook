import React from "react";

const ListItem = ({ transaction, removetranscation,  edittransaction }) => {
  return (
    <li
      className={
        transaction.amount > 0
          ? "list-group-item rounded-0 text-success"
          : "list-group-item rounded-0 text-danger"
      }
    >
      <h1>
        {" "}
        {transaction.text}: {transaction.amount}
      </h1>
      <span className="float-end">
        <button className="btn btn-sm btn-warning rounded-0" onClick={()=> edittransaction(transaction)}  >Edit</button>
        <button className="btn btn-sm btn-danger rounded-0" onClick={()=>removetranscation(transaction.id)}>Delete</button>
      </span>
    </li>
  );
};

export default ListItem;
