export const DateFormat = (dateString: string) => {
    const date = new Date(dateString);
    return date.getMonth().toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
        })
        + '/' + date.getDate().toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
        })
        + '/' + date.getFullYear().toString().slice(2, 4);
}