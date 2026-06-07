import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User, UserFormData } from "../types/user";


interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};


export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();
        return data;
    }
);

// ── The Slice ──
// createSlice combines the initial state, reducers (for synchronous
// actions like add/update/delete), and extraReducers (for async
// thunk actions like fetch) into a single, clean definition.

const userSlice = createSlice({
    name: "users",

    initialState,

    reducers: {

        addUser: (state, action: PayloadAction<UserFormData>) => {
            const newId = state.users.length > 0
                ? Math.max(...state.users.map(u => u.id)) + 1
                : 1;

            const newUser: User = {
                id: newId,
                ...action.payload,
            };

            state.users.push(newUser);
        },

        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex(
                u => u.id === action.payload.id
            );

                       if (index !== -1) {
                state.users[index] = action.payload;
            }
        },

        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(
                u => u.id !== action.payload
            );
        },
    },


    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;