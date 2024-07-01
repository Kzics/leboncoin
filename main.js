const axios = require('axios');

const requestData = {
    filters: {
        category: {
            id: "4"
        },
        enums: {
            ad_type: ["offer"]
        },
        ranges: {}
    },
    limit: 35,
    limit_alu: 3,
    sort_by: "time",
    sort_order: "desc",
    offset: 0,
    extend: true,
    listing_source: "direct-search"
};

const apiKey = 'ec93bd5b677c0bb9043ede65a225a8cf';
const scraperApiUrl = `https://api.scraperapi.com/?api_key=${apiKey}&url=https://api.leboncoin.fr/finder/search&country_code=eu&device_type=desktop`;

axios.post(scraperApiUrl, requestData, {
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Erreur :', error);
    });
