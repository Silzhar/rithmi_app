const BASE_URL = 'https://rithmi.herokuapp.com//api/auth/register';
const registerUrl = `${BASE_URL}/auth/register`;
const loginrUrl = `${BASE_URL}/auth/login`;
const checkSessionUrl = `${BASE_URL}/auth/check-session`;



/**
 * Parámetros de userdata.
 * @param {Objet} userdata
 * @param {string} userdata.username
 * @param {string} userdata.email
 * @param {string} userdata.password
 */
export const register = async (userdata) => {
  const response = await fetch(registerUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(userdata),
  });
  const jsonResponse = await response.json();

  if (!response.ok) {
    console.log(jsonResponse);
    throw new Error('Error!');
  }
  return jsonResponse;
};

/**
 * Parámetros de userdata.
 * @param {Objet} userdata
 * @param {string} userdata.email
 * @param {string} userdata.password
 */
export const login = async (userdata) => {
  const response = await fetch(loginrUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(userdata),
  });
  const jsonResponse = await response.json();

  if (!response.ok) {
    console.log(jsonResponse);
    throw new Error('Error!');
  }
  return jsonResponse;
};

export const checkSession = async () => {
  const response = await fetch(checkSessionUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // Send cookie to server.
    credentials: 'include',
  });

  const jsonResponse = await response.json();

  if (!response.ok) {
    console.log(jsonResponse.message);
    throw new Error('Error!');
  }
  return jsonResponse.data;
}