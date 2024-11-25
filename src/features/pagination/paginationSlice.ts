import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface PaginationState {
    offset:number,
    limit:number,
    page:number,
}

const initialState: PaginationState = {
    offset: 20,
    limit:151,
    page:1
}

export const paginationSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        nextPage: (state) => {
            state.offset += 20
            state.page += 1
        },
        previousPage: (state) => {
            if(state.page === 1) return
            if(state.offset <= 0 || state.page <= 0) {
                state.offset = 20
                state.page = 1
                return
            }
            state.offset -= 20
            state.page -= 1
        },
    }
})

export const { nextPage, previousPage } = paginationSlice.actions
export default paginationSlice.reducer