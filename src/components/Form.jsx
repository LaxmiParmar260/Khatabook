import React, { useEffect, useState } from "react";

const Form = ({ addTransaction, edit, updatetransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    //

    edit.isEdit
      ? updatetransaction({ id: edit.transaction.id, text, amount })
      : addTransaction(text, +amount);

    setText("");
    setAmount(0);
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <div className="card p-3 rounded-0">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          required
          placeholder="Enter Transaction"
          className="form-control rounded-0 my-3"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          type="number"
          required
          placeholder="Enter Amount"
          className="form-control rounded-0 my-3"
        />
        <button className="btn btn-success rounded-0 w-100">
          Save Transaction
        </button>
      </form>
    </div>
  );
};

export default Form;
