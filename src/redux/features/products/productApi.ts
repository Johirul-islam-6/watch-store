import { api } from "@/redux/api/apiSlice";


const productApi = api.injectEndpoints({

   endpoints: (builder) => ({
    
    getProducts: builder.query({
      query: () => `products/`,
    }),
    singelProducts: builder.query({
      query: (id) => `/product/${id}`,
    }),

    // post review a watch 
    postComment :  builder.mutation({
      query : ({id, data}) => ({
        url : `/comment/${id}`,
        method : 'POST',
        body : data
      }),
      invalidatesTags : ['comment']
    }),
    getComments : builder.query({
      query : (id) => `/comment/${id}`,
      providesTags : ['comment']
    })
  }),
})

export const {useGetProductsQuery, useSingelProductsQuery, usePostCommentMutation, useGetCommentsQuery} = productApi;