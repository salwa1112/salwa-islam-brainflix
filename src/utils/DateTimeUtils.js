import { DateTime } from "luxon";


export const getShortDateFromTimestamp = (timestamp) => {

    if (!timestamp) {
        return 'Not a valid timestamp';
    }

    return DateTime.fromMillis(timestamp).toFormat('dd/MM/yyyy');
}



const DateTimeUtils = {
    getShortDateFromTimestamp
}

export default DateTimeUtils;