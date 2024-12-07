/**
 * Converts a (DD.MM.YYYY) date into the (MM.DD.YYYY) format
 * @param dateString a date string in the (DD.MM.YYYY) format
 * @return Date string formatted in (MM.DD.YYYY) format
 */
export function dateToECMAFormat(dateString: string) {
    const dateList = dateString.split(".");
    return dateList[1] + "." + dateList[0] + "." + dateList[2];
}

/**
 * Converts a start and end date (DD.MM.YYYY) into a year span
 * @param start a date string in the (DD.MM.YYYY) format
 * @param end a date string in the (DD.MM.YYYY) format
 * @return String formated <startMonthName startYear - endMonthName endYear>, if start and end are in the same month and year then just <monthName year>
 */
export function createTranslatedYearSpan(start: string, end: string): string {
    const { locale } = useI18n();

    const dateStart = new Date(dateToECMAFormat(start));
    const dateEnd = new Date(dateToECMAFormat(end));
    const yearStart = dateStart.toLocaleString(locale.value, { month: "long" }) + " " + dateStart.getFullYear().toString();
    const yearEnd = dateEnd.toLocaleString(locale.value, { month: "long" }) + " " + dateEnd.getFullYear().toString();
    return yearStart !== yearEnd ? yearStart + " - " + yearEnd : yearStart;
}
