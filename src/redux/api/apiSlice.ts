
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  tagTypes : ['comment'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://watch-server-pi.vercel.app/' }),
  endpoints: (builder) => ({ }),
})


