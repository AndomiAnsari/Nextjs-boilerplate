import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store"; // Assuming you have a store setup

interface User {
  id: string;
  name: string;
}

interface InitialState {
  users: User[];
}

const initialState: InitialState = {
  users: [],
};

const Slice = createSlice({
  initialState,
  name: "user",
  reducers: {
    addUser: (state, action) => {
      const data: User = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
    removeUser: (state, action) => {
      console.log(action);
    },
  },
});

export const { addUser, removeUser } = Slice.actions;
// export const selectUsers = (state: RootState) => state.user.users;

export default Slice.reducer;
