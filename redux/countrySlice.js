import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value : 'AE',
}

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    country: (state, action) => {
    
        // write the logic here to submit data
        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { country } = countrySlice.actions

export default countrySlice.reducer