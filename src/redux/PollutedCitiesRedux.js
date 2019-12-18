import { countries } from '../data/dataStore';

export const getFilteredCities = ({measurements, userInput}) => {
    let output = measurements;

    // find country data
    const countryData = countries.find(data => data.country == userInput);

    // filter data if countryData is found
    if (countryData == undefined) {
        console.log('No results found');
    } else {
        output = output.filter(data => (data.country == countryData.code));
    }

    // Remove duplicates & display 10 first results
    output = output.filter((data, index, self) => 
        index === self.findIndex(d => (
            d.city === data.city
        ))
    ).slice(0,10);

    return output;
};