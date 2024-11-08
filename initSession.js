// import axios from 'axios';
// import { cityPassApiUrl, encryptedAdministrationNo, xApiKey, xSessionCredentials } from "./credentials.js";

// const sessionInitUrl = `${cityPassApiUrl}/session/init`
// const loginUrl = `${cityPassApiUrl}/session/credentials`

// export const getTokens = async () => {
//     console.log(`sessionInitUrl: ${sessionInitUrl}`)
//     console.log(`cityPassApiUrl: ${cityPassApiUrl}`)
//     console.log(`loginUrl: ${loginUrl}`)
//     console.log(`encryptedAdministrationNo: ${encryptedAdministrationNo}`)
//     console.log(`xApiKey: ${xApiKey}`)
//     console.log(`xSessionCredentials: ${xSessionCredentials}`)
//     const tokens = await axios.post(sessionInitUrl, {
//         // Your authentication data (e.g., username, password)
//     }, {
//         headers: {
//             'x-api-key': xApiKey
//         }
//     })
//         .then(response => {
//             console.log(`Status code: ${response.status}`)
//             console.log(response.data)
//             return response.data
//         })
//         .catch(error => {
//             console.log(`Error: ${error}`);
//         })

//     const accessToken = tokens.access_token
//     const refreshToken = tokens.refresh_token
//     console.log(accessToken)
//     console.log(refreshToken)

//     let data = JSON.stringify({
//         "session_token": accessToken,
//         "encrypted_administration_no": encryptedAdministrationNo
//     });

//     const loginRequest = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: loginUrl,
//         headers: {
//             'X-Session-Credentials-Key': xSessionCredentials,
//             'Content-Type': 'application/json'
//         },
//         data: data
//     };

//     axios.request(loginRequest)
//         .then((response) => {
//             console.log(JSON.stringify(response.data));
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//     return { accessToken, refreshToken }
// }

// getTokens()
