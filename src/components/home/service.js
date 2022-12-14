import { api, catchHandler } from "../../helperFunctions/axios";
import config from "../../config"

export function fetchAllRental(location) {
    console.log(config , "config")
    return api()
        .get(`${config.routes.rentalList}/all`)
        .then(res => res.data)
        .catch((err) => catchHandler(err))
}
export function addrentalFromAdmin(payload) {
    return api()
        .post(`${config.routes.rentalList}/add` , payload)
        .then(res => res.data)
        .catch((err) => catchHandler(err))
}