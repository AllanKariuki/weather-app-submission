import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { fetchWeatherData } from './weatherService';



type InitialState = {
    value: WeatherState;
}

type WeatherState = {
    weatherResult: any [];
    isLoading :boolean;
    isSuccess: boolean;
    isError: boolean;
    message: string;
}

const initialState : InitialState = {
    value: {
        weatherResult: [],
        isLoading :false,
        isSuccess: false,
        isError: false,
        message: "",
    } as WeatherState,
};

export const fetchWeather = createAsyncThunk(
    'weather/forecast', 
    async(_, thunkAPI) => {
        try {
            const data = await fetchWeatherData();
            return data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


export const weather = createSlice({
    name: "weather",
    initialState,
    reducers : {
        toggleSearch: (state) => {
            state.value.isSuccess = !state.value.isSuccess
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.value.isLoading = true;
            })
            .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<any>) => {
                state.value.isLoading = false;
                state.value.weatherResult = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action: PayloadAction<any>) => {
                state.value.isLoading = false;
                state.value.isError = action.payload;
            });
    }
});


export const { toggleSearch} = weather.actions;
export default weather.reducer;



// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { fetchWeatherData } from './weatherService';


// type InitialState = {
//     value: WeatherState;
// }

// type WeatherState = {
//     weatherResult: String;
//     isLoading :boolean;
//     isSuccess: boolean;
//     isError: boolean;
//     message: string;
// }

// const initialState = {
//     value: {
//         weatherResult: "",
//         isLoading :false,
//         isSuccess: false,
//         isError: false,
//         message: "",
//     } as WeatherState,
// } as InitialState;


// interface FetchWeatherAction {
//     city: string;
//   }
  
//   export const fetchWeather = createAsyncThunk(
//     'weather/fetchWeather',
//     async (action: FetchWeatherAction, thunkAPI) => {
//       try {
//         const data = await fetchWeatherData(action.city);
//         return data;
//       } catch (error: any) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );


// export const weather = createSlice({
//     name: "weather"
//     initialState,
//     reducer: {
//         reset: (state) => initialState,
//     },
//     extraReducers : (builder) => {
//         builder 
//             .addCase(fetchWeather.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<any>) => {
//                 state.loading = false;
//                 state.data = action.payload;
//             })
//             .addCase(fetchWeather.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             });
//     }
// })


// export const { reset} = weather.actions;
// export default weather.reducer;

