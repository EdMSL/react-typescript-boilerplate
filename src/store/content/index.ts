import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
});

export const { changeView } = contentSlice.actions;

export const contentReducer = contentSlice.reducer;
