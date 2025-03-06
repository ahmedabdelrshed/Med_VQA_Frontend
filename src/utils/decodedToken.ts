import { jwtDecode } from "jwt-decode";

const calExpiresDate = (token: string) => {
    const decodedToken: { exp: number } = jwtDecode(token);
    const expiresInMilliseconds = (decodedToken.exp * 1000) - Date.now();
    const expiresInDays = Math.round(expiresInMilliseconds / (1000 * 60 * 60 * 24));
    const expires = expiresInDays > 0 ? expiresInDays : 1;
    return expires;
}

export default calExpiresDate;