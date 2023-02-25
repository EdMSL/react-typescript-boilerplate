import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { IAppState, IAppDispatch } from '$types/state';

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;
