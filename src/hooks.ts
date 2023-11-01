import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { AppDispatchType, RootStateType } from "./store/store";

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
