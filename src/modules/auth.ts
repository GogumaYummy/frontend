import produce from 'immer';
import { ActionType, createAction, createReducer } from 'typesafe-actions';

export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
  CHANGE_FIELD,
  ({
    form,
    key,
    value,
  }: {
    form: keyof AuthState;
    key: keyof AuthState[keyof AuthState];
    value: string;
  }) => ({
    form,
    key,
    value,
  }),
)();
export const initializeForm = createAction(
  INITIALIZE_FORM,
  (form: keyof AuthState) => form,
)();

const actions = { changeField, initializeForm };
export type AuthAction = ActionType<typeof actions>;

export type AuthState = {
  register: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    username: string;
    password: string;
  };
};

const initialState: AuthState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = createReducer<AuthState, AuthAction>(initialState, {
  [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    produce(state, (draft) => {
      draft[form][key] = value;
    }),
  [INITIALIZE_FORM]: (state, { payload: form }) => ({
    ...state,
    [form]: initialState[form],
  }),
});
