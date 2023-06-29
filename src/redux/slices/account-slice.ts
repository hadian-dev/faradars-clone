import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type AccountState = {
  id: number
  phone: string
  email: string
  name: string
  image: string
}

const initialState: AccountState = {
  id: 0,
  phone: '',
  email: '',
  name: '',
  image: '',
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateAccount: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
})

export const { updateAccount } = accountSlice.actions
export default accountSlice.reducer
