import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myTask: builder.query({
      query: (queries) => ({
        url: `/task/my-tasks`,
        method: "GET",
        params: queries,
      }),
      providesTags: ["task"],
    }),
    addTask: builder.mutation({
      query: (productData) => ({
        url: "/task/add-task",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["task"],
    }),
    updateTask: builder.mutation({
      query: (args) => {
        return {
          url: `/task/update-task/${args.id}`,
          method: "PUT",
          body: args.taskData,
        };
      },
      invalidatesTags: ["task"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: "/task/delete/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["task"],
    }),
  }),
});

export const {
  useAddTaskMutation,
  useMyTaskQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = productApi;
