import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const contactsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://641201246e3ca3175304119e.mockapi.io/api/auth',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchAll: builder.query({
      query: () => ({ url: '/contacts' }),
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: { name, number },
      }),
    }),
    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
