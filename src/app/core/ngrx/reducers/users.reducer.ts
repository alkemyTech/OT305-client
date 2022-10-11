import { createReducer, on } from '@ngrx/store';
import { Get_Users, Get_Users_Error, Get_Users_Success } from '../actions/users.actions';
import { UsersState } from '../app.store';

export const initialState: UsersState = { loading: false, users: []}

export const usersReducer = createReducer(
  initialState,
  on(Get_Users, (state) => { 
    return { ... state, loading: true }
  }),
  on(Get_Users_Success, (state, {users}) => { 
    return { ... state, loading: false, users }
  }),
  on(Get_Users_Error, (state, {error}) => { 
    return { ... state, loading: false, error }
  })
); 