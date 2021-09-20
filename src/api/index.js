import axios from 'axios';

export const getPlaceData = async (type, rating, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key':
            process.env.REACT_APP_RAPID_API_TRAVEL_ADVISOR_API_KEY,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
