import config from "../config/discoverWidget";

export const fetchItems = async (locale = '*', countryCode = 'US', page = 1, size = 5,keyword) => {
    let { BASE_URL, EVENT_CONSTANT, API_KEY } = config;
    try {
        let result = await fetch(`${BASE_URL}/${EVENT_CONSTANT}?apikey=${API_KEY}&locale=${locale}&countryCode=${countryCode}&page=${page}&size=${size}${keyword?`&keyword=${keyword}`:''}`).then(res => res.json());
        const { _embedded } = result;
        if (_embedded && _embedded.events) {
          return [..._embedded.events];
        }
        else {
          return [];
        }
    }
    catch (e) {
      return []
    }

  }
  export const fetchEvent = async (eventId) => {
    let { BASE_URL, EVENT_CONSTANT, API_KEY } = config; 
    try {
        let result = await fetch(`${BASE_URL}/events/${eventId}?apikey=${API_KEY}`).then(res => res.json());
        // const { _embedded } = result;
       console.log("result from api : ",result)
       return result;
    }
    catch (e) {
      return null
    }

  }