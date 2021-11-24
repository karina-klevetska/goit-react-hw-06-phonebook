import { createReducer } from '@reduxjs/toolkit'

export const contactsList = createReducer([], {
  'contact/add': (state, { payload }) => [...state, payload],
  'contact/delete': (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
})

export const contactFilter = createReducer('', {
  'filter/value': (_, { payload }) => payload,
})
