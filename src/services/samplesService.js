const baseUrl = 'https://rithmi.herokuapp.com/'
const { DB_URI_DEV } = process.env
const dbUri = DB_URI_DEV

export const getBaseData = async () => {
    try {
      const response = await fetch(dbUri);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return {
        results: jsonResponse.results,
        nextPage: jsonResponse.info.next,
      };
    } catch (error) {
      return {
        results: [],
        nextPage: null,
      };
    }
  };
  
  export const getDataFromUrl = async (url) => {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
  
      return {
        results: jsonResponse.results,
        nextPage: jsonResponse.info.next,
      };
    } catch (error) {
      return {
        results: [],
        nextPage: null,
      };
    }
  };
  