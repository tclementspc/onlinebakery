import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/comments" }),
  /*created API above just to see the comments */
  endpoints: (builder) => ({
    getAllComments: builder.query({
      query: () => "comments",
    }),
  }),
});
export const { useGetAllCommentsQuery } = commentsApi;
