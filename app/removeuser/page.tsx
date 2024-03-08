"use client";
import { removeUser } from "@/store/reducer/slice";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const userData = useSelector((data) => data.user);
  const dispatch = useDispatch();
  console.log(userData,'userData');
  return (
    <div className="display-user">
      <h1>Remove user Page</h1>

      {userData.users.map((item) => (
        <div className="user-display-item">
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser(item.id))}>
            Remove User
          </button>
        </div>
      ))}
    </div>
  );
}
