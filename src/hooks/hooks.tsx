import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { IAppState, IAppDispatch } from '$types/state';

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;