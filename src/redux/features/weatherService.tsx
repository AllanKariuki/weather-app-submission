import axios from "axios";

const API_KEY = 'YOUR_API_KEY';

interface WeatherDataResponse {
    data: any; // Adjust the type according to the actual response structure
}
  
  export const fetchWeatherData = async (): Promise<any> => {
    try {
      const response: WeatherDataResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1ca4e2dfc6e32b5b45f2d4b6495a563c`
      );
      return response.data;
    } catch (error : any) {
      throw new Error(error.response.data.message);
    }
  };