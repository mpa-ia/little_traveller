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
    
    // remove duplicates
    output = output.filter((data, index, self) => 
        index === self.findIndex(d => (
            d.city === data.city
        ))
    );

    return output;
};