import { auth } from "@/lib/firebase";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

interface IUserState {
    user : {
        email : string | null;
    };
    isLoading : boolean;
    isError : boolean;
    error : string | null
}

interface ICreateUser{
    email : string,
    password : string
}

const initialState : IUserState = {
    user : {
        email : null
    },
    isLoading : false,
    isError : false,
    error : null
}


// create user state
export const createUser = createAsyncThunk('user/createUser', async ({email, password}:ICreateUser)   =>{
  const data = await createUserWithEmailAndPassword(auth, email, password)
    return data?.user?.email
})
// Login user state
export const loginUser = createAsyncThunk('user/loginUser', async ({email, password}:ICreateUser)   =>{
  const data = await signInWithEmailAndPassword(auth, email, password)
    return data?.user?.email
})

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setUser : (state, action : PayloadAction<string | null>) =>{
            state.user.email = action.payload
        },
        setLoding : (state, action : PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
    extraReducers : (bulder) =>{
        bulder
        .addCase(createUser.pending, (state) =>{
            state.isLoading = true;
            state.isError = false;
            state.error = null
        } )
        .addCase(createUser.fulfilled , (state, action) =>{
            state.user.email =  action.payload;
            state.isLoading = false;
        })
        .addCase(createUser.rejected, (state, action) =>{
            state.user.email = null;
            state.isError = true;
            state.isLoading = false;
            state.error = action.error.message!
        })
        // login email with password
         .addCase(loginUser.pending, (state) =>{
            state.isLoading = true;
            state.isError = false;
            state.error = null
        } )
        .addCase(loginUser.fulfilled , (state, action) =>{
            state.user.email =  action.payload;
            state.isLoading = false;
        })
        .addCase(loginUser.rejected, (state, action) =>{
            state.user.email = null;
            state.isError = true;
            state.isLoading = false;
            state.error = action.error.message!
        })
        
    }
})

export const {setUser, setLoding} = userSlice.actions

export default userSlice.reducer