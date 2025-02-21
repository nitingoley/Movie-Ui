import {apiSlice} from "./apiSlice";
import { GENRE_URL } from "../constant";



export const genreApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createdGenre: builder.mutation({
            query: (newGenre)=>({
                url: `${GENRE_URL}`,
                method: 'POST',
                body: newGenre,
            })
        }),
        updateGenre: builder.mutation({
            query: ({id, updateGenre})=>({
                url: `${GENRE_URL}/${id}`,
                method:"PUT",
                body: updateGenre,
            })
        }),
        deleteGenre: builder.mutation({
            query: (id)=>({
                url: `${GENRE_URL}/${id}`,
                method: "DELETE",
            }),
        }),
        fetchGenres: builder.query({
            query: ()=> `${GENRE_URL}/all-genres`,
        })
    })
});


export const {
    useCreatedGenreMutation,
    useUpdateGenreMutation,
    useDeleteGenreMutation,
    useFetchGenresQuery,
  } = genreApiSlice;