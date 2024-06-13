const isToday = (date: Date) => {
    return date.getFullYear() === new Date().getFullYear() &&
        date.getMonth() === new Date().getMonth() &&
        date.getDate() === new Date().getDate();
}

const mmDDYYYY = (date: Date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

export const dateDisplay = (date: Date) => {
    if (isToday(date)) {
        return 'Today';
    }
    return mmDDYYYY(date);
}

export const getNameOfDay = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}