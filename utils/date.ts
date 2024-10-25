/**
 * Converts a (DD.MM.YYYY) date into the (MM.DD.YYYY) format
 * @param dateString a date string in the (DD.MM.YYYY) format
 * @return Date string formatted in (MM.DD.YYYY) format
 */
export function dateToECMAFormat(dateString: string) {
    const dateList = dateString.split(".");
    return dateList[1] + "." + dateList[0] + "." + dateList[2];
}
