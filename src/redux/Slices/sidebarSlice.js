import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
      value: false,
    },
    reducers: {
      toggle: state => {
        state.value = !state.value;
      }
    },
  });

  export const { toggle }=sidebarSlice.actions
  export default sidebarSlice.reducer