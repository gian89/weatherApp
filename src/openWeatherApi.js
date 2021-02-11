const getCityCurrentDetails = (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=42d68aa1c36154f5ba69ae2900a549b5&units=metric`;
    return apiWeatherCaller(url);
};

const getCityDetails = (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=42d68aa1c36154f5ba69ae2900a549b5&units=metric`;
    return apiWeatherCaller(url);
};


const apiWeatherCaller = (url, method = 'GET', body = "") => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(url,
                {
                    method: method,
                    body: body
                }
                );
            let responseJson = await response.json();
            resolve(responseJson);
        } catch (e) {
            reject(e);
        }
    });
};


export const openWeatherApi = {
    getCityCurrentDetails,
    getCityDetails
};
