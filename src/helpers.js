/* This function is for add comma between numbers */
export function numberWithCommas(value) {
    return Number(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* This function is for converting number to hours/minutes format */
export function timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours} h ${minutes} m`;
}