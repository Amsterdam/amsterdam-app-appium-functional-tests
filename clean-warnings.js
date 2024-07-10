import axios from 'axios';
import { DeviceAuthorization, apiUrl, deviceId, xApiKey } from "./credentials.js";

//const getToken = `${apiUrl}/get-token/`
const warnings = `${apiUrl}/project/details`
const deleteWarning = `${apiUrl}/manage/warnings`
const bearerToken = process.env.BEARER_TOKEN

// const token = axios.post(getToken, {
//     username,
//     password
// })
//     .then(response => {
//         //console.log(response.data)
//         const result = response.data.access
//         //console.log(`This is the token: ${result}`)
//         return result
//     })
//     .catch(error => {
//         console.log(`Token error: ${error}`);
//     });

await axios.get(warnings, {
    params: {
        'id': 47
    },
    headers: {
        'DeviceAuthorization': DeviceAuthorization,
        'deviceId': deviceId,
        'x-api-key': xApiKey
    }
})
    .then(response => {
        const result = response.data.recent_articles
        result.forEach(async element => {
            //for each identifier make another request to delete the notification
            axios.delete(`${deleteWarning}/${element.id}`, {
                headers: {
                    'AUTHORIZATION': `Bearer ${bearerToken}`,
                }
            }).then(response => {
                console.log(`status code: ${response.status}`)
            })
                .catch(error => {
                    console.log(error);
                });
        });
    }).catch(error => {
        console.log(`get warnings error: ${error}`);
    })