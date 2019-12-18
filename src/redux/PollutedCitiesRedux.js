export const getFilteredCities = ({measurements, userInput}) => {
    let output = measurements;

    // filter by userInput
    if(userInput == 'ES') {
        output = output.filter(city => city.country == userInput);
    }

    return output;
};