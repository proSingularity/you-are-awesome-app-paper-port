import { combineReducers } from "redux";
import type { CombinedState, Reducer } from "redux";
import { IAnyAction } from "../actions/IAction";
import { IState } from "../state/IState";
import { appReducer } from "./appReducer";
import { networkReducer } from "./networkReducer";
import { postReducer } from "./postReducer";

type MyReducer = Reducer<CombinedState<IState>, IAnyAction>;
type assertReducerMatchesState<T extends MyReducer> = T extends Reducer<
    CombinedState<infer S>,
    infer A
>
    ? Reducer<CombinedState<S>, A>
    : false;

const reducers = {
    posts: postReducer,
    app: appReducer,
    network: networkReducer,
};
const combined = combineReducers(reducers);
export const rootReducer: assertReducerMatchesState<typeof combined> = combined;
