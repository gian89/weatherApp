export const unixConverter = (unix_timestamp) => {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours + ':' + minutes.substr(-2);
    let dayNumber = date.getDate();
    let weekDay = days[date.getDay()];
    let month = months[date.getMonth()];

    let ampm = hours >= 12 ? 'pm' : 'am';
    let hours12 = hours % 12;
    hours12 = hours12 ? hours12 : 12;
    let hoursAmPm = hours12 + ' ' + ampm;
    let hourMinuteAmPm =hours12 + ':' + minutes +  ' ' + ampm;
    return {
        dayNumber,
        weekDay,
        month,
        formattedTime,
        hoursAmPm,
        hourMinuteAmPm
    };
};
