import { DateTime } from "luxon";


export const getShortDateFromTimestamp = (timestamp) => {
    return DateTime.fromMillis(timestamp).toFormat('dd/MM/yyyy');
}



const DateTimeUtils = {
    getShortDateFromTimestamp
}

export default DateTimeUtils;