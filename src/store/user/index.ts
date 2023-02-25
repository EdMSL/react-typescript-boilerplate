import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRequestError } from '$api/user';
import { DEFAULT_REQUEST_ERROR } from '$constants/defaultParameters';

export type IUserRootState = Readonly<{
  isSidebarMinimized: boolean,
  userAvatar: string,
  requestError: IRequestError,
}>;

const initialState: IUserRootState = {
  isSidebarMinimized: false,
  userAvatar: '',
  requestError: DEFAULT_REQUEST_ERROR,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    minimizeSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarMinimized = action.payload;
    },
    setUserAvatar: (state, action: PayloadAction<string>) => {
      state.userAvatar = action.payload;
    },
    setRequestError: (state, action: PayloadAction<IRequestError>) => {
      state.requestError = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { minimizeSidebar, setUserAvatar, setRequestError } = userSlice.actions;

export const userReducer = userSlice.reducer;
