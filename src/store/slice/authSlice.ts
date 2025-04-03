import {createSlice} from '@reduxjs/toolkit';

interface User {
  email: string;
  password: string;
}
interface UserState {
  users: User[];
  loggedInUser: string | null;
}

const initialState: UserState = {
  users: [],
  loggedInUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      const userExists = state.users.find(
        user =>
          user.email === action.payload.email &&
          user.password === action.payload.password,
      );
      state.loggedInUser = userExists ? action.payload.email : null;
    },
    logout: state => {
      state.loggedInUser = null;
    },
  },
});

export const {signup, login, logout} = authSlice.actions;
export default authSlice.reducer;
