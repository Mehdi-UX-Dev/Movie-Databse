import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  input: '',
}

export const submitSlice = createSlice({
  name: 'submit',
  initialState,
  reducers: {
    submitValue: (state, action) => {
    
        // write the logic here to submit data
        state.input = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { submitValue } = submitSlice.actions

export default submitSlice.reducer