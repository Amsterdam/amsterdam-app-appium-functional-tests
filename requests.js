import {performance} from 'node:perf_hooks'
import request from 'supertest'
const wasteGuideUrlData =
  'https://api.data.amsterdam.nl/v1/afvalwijzer/afvalwijzer/'
const wasteGuideUrlApp =
  'https://api-waste-guide.app-amsterdam.nl/api/v1/search'

export async function wasteGuideRequestData(bagnummer) {
  const start = performance.now()
  request(wasteGuideUrlData)
    .get('')
    .query({
      bagNummeraanduidingId: await bagnummer,
      _format: 'json',
    })
    .expect(200)
    .end(function (err, res) {
      const end = performance.now()
      const responseTime = end - start
      if (err) {
        console.log(`Statuscode voor data api: ${res.status}`)
        console.log(res.body)
        console.log(`responseTime voor data api: ${responseTime}`)
        //console.log(err)
      } else {
        console.log(`Statuscode voor data api: ${res.status}`)
        console.log(`responseTime voor data api: ${responseTime}`)
      }
    })
}

export async function wasteGuideRequestApp(bagnummer) {
  const start = performance.now()
  request(wasteGuideUrlApp)
    .get('')
    .query({
      bagNummeraanduidingId: await bagnummer,
      _format: 'json',
    })
    .expect(302)
    .end(function (err, res) {
      const end = performance.now()
      const responseTime = end - start
      if (err) {
        console.log(`Statuscode voor aapi: ${res.status}`)
        console.log(res.body)
        console.log(`responseTime voor aapi: ${responseTime}`)
        //console.log(err)
      } else {
        console.log(`Statuscode voor aapi: ${res.status}`)
        console.log(`responseTime voor aapi: ${responseTime}`)
      }
    })
}

// export async function wasteGuideRequest(bagnummer) {
//     return new Promise(() => {
//         // Start the timer
//         const start = performance.now();

//         request(wasteGuideUrlData)
//             .get('')
//             .query({
//                 'bagNummeraanduidingId': bagnummer,
//                 '_format': 'json'
//             })
//             .expect(200)
//             .end(function (err, res) {
//                 // End the timer
//                 const end = performance.now();
//                 const responseTime = end - start;
//                 if (err) {
//                     console.log(`Statuscode: ${res.status}`)
//                     console.log(res.body)
//                     console.log(`responseTime: ${responseTime}`)
//                 } else {
//                     console.log(`Statuscode: ${res.status}`)
//                     console.log(`responseTime: ${responseTime}`)
//                 }
//             });
//     });
// }

// export const wasteGuideRequestAmstel = await request()
//     .get(wasteGuideUrlAmstel)
//     .set('Accept', 'application/json')
//     .expect(200)
