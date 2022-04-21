const dev = {
    BASE_URL:"https://app.ticketmaster.com/discovery/v2",
    EVENT_CONSTANT:"events.json",
    API_KEY:"fTfnyxEaUJt1JE0vLL9rCWqMMFwrSqw8",
    COUNTRY_URL:"https://countrycode.org/api/countryCode/countryMenu"
  };
  
  const prod = {
    BASE_URL:"https://app.ticketmaster.com/discovery/v2",
    EVENT_CONSTANT:"events.json",
    API_KEY:"fTfnyxEaUJt1JE0vLL9rCWqMMFwrSqw8",
    COUNTRY_URL:"https://countrycode.org/api/countryCode/countryMenu"
  };
  
  const config = {
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
  };
  
  export default config;