export const DateFormat = (dateString: string) => {
    const date = Date.parse(dateString);
    const oDate = new Intl.DateTimeFormat(dateString);
    const fDate = (m_ca: any, m_it: any) => Object({...m_ca, [m_it.type]: m_it.value});
    const mDate = oDate.formatToParts().reduce(fDate, {});
    return mDate.month + '/' + mDate.day + '/' + mDate.year.slice(2, -1);
}