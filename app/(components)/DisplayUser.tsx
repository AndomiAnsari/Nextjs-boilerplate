"use client";
import { removeUser } from "@/store/reducer/slice";
import { useDispatch, useSelector } from "react-redux";
export default function DisplayUser() {
  const userData = useSelector((data) => data.user);
  const dispatch = useDispatch();
  console.log(userData);

  return (
    <div className="display-user">
      <h3>DisplayUser</h3>

      {userData.users.map((item) => (
        <div className="user-display-item">
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}
