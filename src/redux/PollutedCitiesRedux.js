export const getFilteredCities = ({measurements, userInput}) => {
    let output = measurements;

    // filter by userInput
    if(userInput == 'ES') {
        output = output.filter(data => (data.country == userInput));
    }
    return output;
};