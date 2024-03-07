"use client";
import { addUser } from "@/store/reducer/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddUser() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    dispatch(addUser(name));
    console.log(name);
  };

  return (
    <div className="add-user">
      <h3>user list</h3>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="add-user-input"
        placeholder="Add New User"
      />
      <button onClick={userDispatch} className="add-user-btn">
        Add user
      </button>
    </div>
  );
}
