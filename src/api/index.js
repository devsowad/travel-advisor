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
            '71fe4eed6cmsh69ba8236ae65c88p1cb7b9jsn816836a37411',
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
