//Given(/ik haal alle projecten op uit de api/, async () => {
// const projectsPageOne = 'https://api-test-backend.luscinia-solutions.com/api/v1/projects'

// axios.get(projectsPageOne, {
//     params: {
//         'fields': 'followed,identifier,images,publication_date,recent_articles,subtitle,title',
//         'articles_max_age': 60,
//         'page_size': 20,
//         'page': 1
//     },
//     headers: {
//         'deviceid': '99F092B9-09E7-42C8-BE6E-2F914AE63107',
//         'releaseversion': '0.31.0'
//     }
// })
//     .then(response => {
//         console.log(response.data);
//         const result = response.data.result;
//         //let i = 0

//         for (let i = 0; i < result.length; i++) {
//             const articles = response.data.result[i].recent_articles
//             //console.log(articles)
//             for (let j = 0; j < articles.length; j++) {
//                 // notice that we are going inside the outer array
//                 // and now inside of the inner array
//                 console.log(articles[j]);
//             }
//         }
//     })
//     .catch(error => {
//         console.log(error);
//     });
//})

//voor elk item kijk hoeveel recent articles er zijn
//result.i.recent_articles.length
//result.i.recent_articles.i.publication_date

// Given ik ben op het werkzaamheden scherm
// And ik volg een aantal projecten
// When ik bekijk de volgorde van de projecten
// Then ik zie dat de projecten in de goede volgorde staan
