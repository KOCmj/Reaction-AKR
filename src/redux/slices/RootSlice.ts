import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        IBSN: "IBSN",
        author: "Author",
        category: "Category",
        image: "",
        published_date: "Published Date",
        title: "Title"
    },
    reducers: {
        chooseIBSN: (state, action) => { state.IBSN = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseCategory: (state, action) => { state.category = action.payload },
        chooseImage: (state, action) => { state.image = action.payload },
        choosePublishedDate: (state, action) => { state.published_date = action.payload },
        chooseTitle: (state, action) => { state.title = action.payload }
    }   
})

export const reducer = rootSlice.reducer;
export const { chooseIBSN, chooseAuthor, chooseCategory, chooseImage, choosePublishedDate, chooseTitle} = rootSlice.actions