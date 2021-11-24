export const getContacts = (state) => state.contacts

export const getFilter = (state) => state.filter

export const getFilteredContacts = (state) => {
  const contacts = getContacts(state)
  const filter = getFilter(state)
  const normalizedFilter = filter.toLowerCase()
  return contacts.filter((e) => e.name.toLowerCase().includes(normalizedFilter))
}
