import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constant";


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: "POST",
                body: data,
                credentials: "include", // ✅ Required for cookies
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: "POST",
                credentials: "include",
            }),
        }),
        profile: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),
        getUsers: builder.query({
            query: () => ({
                url: USERS_URL,
                credentials: "include",
            }),
        }),
    }),
});

export const {useLoginMutation , useRegisterMutation , useLogoutMutation , useProfileMutation , useGetUsersQuery}  = userApiSlice;
