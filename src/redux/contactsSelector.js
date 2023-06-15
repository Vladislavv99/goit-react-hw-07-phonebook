export const getContacts = store =>
  store.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(store.filter.toLowerCase())
  );

export const getFiltered = store => store.filter;
