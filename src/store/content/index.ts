import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type IContentRootState = Readonly<{
  view: string,
}>;

const initialState: IContentRootState = {
  view: 'react',
};

export const contentSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeView: (state, action: PayloadAction<string>) => {
      state.view = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeView } = contentSlice.actions;

export const contentReducer = contentSlice.reducer