import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

interface AuthSlice {
  loading: boolean;
  user: any;
  error: string | any;
}

interface ErrorResponse {
  errors: { [key: string]: string[] };
}

const initialState: AuthSlice = {
  loading: false,
  user: undefined,
  error: null,
};
interface RegistrationData {
  email: string;
  username: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  'user/register',
  async (userData: RegistrationData, thunkAPI) => {
    try {
      const response = await axios.post('https://api.realworld.io/api/users', {
        user: userData,
      });
      alert(`Create success ! \nWelcome ${userData.username}`);
      return response.data.user;
    } catch (err: any) {
      alert(`Create failed ! \n${JSON.stringify(err)}`);
      return thunkAPI.rejectWithValue(
        (err.response.data as ErrorResponse).errors
      );
    }
  }
);
export const login = createAsyncThunk(
  'user/login',
  async (userData: LoginData, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://api.realworld.io/api/users/login',
        {
          user: userData,
        }
      );
      alert(`Login success ! \nWelcome ${userData.email}`);
      return response.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(`Login failed ! \n${JSON.stringify(err)}`);
        return thunkAPI.rejectWithValue(
          (err.response?.data as ErrorResponse).errors
        );
      }
    }
  }
);
export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('accessToken') ?? '';
      const response = await axios.get('https://api.realworld.io/api/user', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return response.data.user;
    } catch (err: any) {
      console.log(err);
      return thunkAPI.rejectWithValue(
        (err.response.data as ErrorResponse).errors
      );
    }
  }
);

export const logout = createAsyncThunk('user/logout', async () => {
  localStorage.removeItem('accessToken');
  alert(`Logout success ! \nSee you later !`);
});

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action: { payload: string }) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action: { payload: string }) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getCurrentUser.fulfilled,
        (state, action: { payload: string }) => {
          state.loading = false;
          state.user = action.payload;
        }
      )
      .addCase(getCurrentUser.rejected, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
