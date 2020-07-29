const { default: Axios } = require("axios");

export default Axios.create( {
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID F-AbYiOxfgtzn2IRrbCKhdyxQr9Irn73NVTGKwBLgBk'
    }
}
)