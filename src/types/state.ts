import { store } from '$store/store';

export type IAppState = ReturnType<typeof store.getState>;

export type IAppDispatch = typeof store.dispatch;
