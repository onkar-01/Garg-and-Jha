import { createSlice, createAction } from "@reduxjs/toolkit";

// Try to retrieve user info from localStorage
if (typeof window !== "undefined") {
  var storedUserInfo = window.localStorage.getItem("userInfo");
  var token = window.localStorage.getItem("token");
  var success = window.localStorage.getItem("sucsess");
}

const initialState = {
  isLoading: false,
  userInfo: storedUserInfo || null, // Initialize with the stored user info
  userToken: token,
  error: null,
  success: success,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      // Use Immer's produce to simplify state updates
      state.userInfo = action.payload.data;
      state.userToken = action.payload.userToken;
      state.success = action.payload.success;
      state.isLoading = false;
      localStorage.setItem("userInfo", JSON.stringify(action.payload.data));
      localStorage.setItem("token", action.payload.userToken);
      localStorage.setItem("success", action.payload.success);
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Use createAction to define actions more concisely
export const clearError = createAction("auth/clearError");

export const { setCredentials, logout, setLoading, setError } =
  authSlice.actions;

export default authSlice.reducer;
