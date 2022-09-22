import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/messages', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      mode: 'same-origin',
    });
    const data = await response.json();
    return data;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, { payload }) => {
      const [message] = payload;
      state.message = message;
    });
  },
});

// Action creators are generated for each case reducer function
const { reducer } = greetingSlice;
export default reducer;
