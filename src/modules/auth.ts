import { ActionType, createAction, createReducer } from 'typesafe-actions';

export const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION)();

export type AuthState = {};

const actions = { sampleAction };
export type AuthAction = ActionType<typeof actions>;

const initialState: AuthState = {};

const auth = createReducer<AuthState, AuthAction>(initialState, {
  [SAMPLE_ACTION]: (state, action) => state,
});

export default auth;
