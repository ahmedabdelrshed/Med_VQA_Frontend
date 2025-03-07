import { jwtDecode } from "jwt-decode";
/**
 * Calculates the expiration date of a JWT token in days.
 *
 * @param {string} token - The JWT token to decode.
 * @returns {number} The number of days until the token expires (minimum 1 day).
 *
 */
const calExpiresDate = (token: string) => {
    const decodedToken: { exp: number } = jwtDecode(token);
    const expiresInMilliseconds = (decodedToken.exp * 1000) - Date.now();
    const expiresInDays = Math.round(expiresInMilliseconds / (1000 * 60 * 60 * 24));
    const expires = expiresInDays > 0 ? expiresInDays : 1;
    return expires;
}

export default calExpiresDate;