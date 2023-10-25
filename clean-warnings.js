import axios from 'axios';
import { apiUrl, password, username } from "./credentials.js";

const getToken = `${apiUrl}/get-token/`
const warnings = `${apiUrl}/project/warnings`

const token = axios.post(getToken, {
    username,
    password
})
    .then(response => {
        //console.log(response.data)
        const result = response.data.access
        //console.log(`This is the token: ${result}`)
        return result
    })
    .catch(error => {
        console.log(`Token error: ${error}`);
    });

await axios.get(warnings, {
    headers: {
        'AUTHORIZATION': await token,
    }
})
    .then(response => {
        const result = response.data.result
        result.forEach(async element => {
            //for each identifier make another request to delete the notification
            const deleteWarning = `${apiUrl}/project/warning`
            axios.delete(deleteWarning, {
                params: {
                    'id': element.identifier,
                },
                headers: {
                    'AUTHORIZATION': await token,
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