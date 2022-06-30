import React from 'react';
import ForecastCard from '../Components/Forecast Card/forecast-card.component';
import MainCard from '../Components/Main Card/main-card.component'
import { ForecastCardStyle } from '../Components/Forecast Card/forecast-card.styles';


const WeatherPage = ({weatherData, dailyData}) => {
    return ( 
        <React.Fragment>
            <MainCard {...weatherData} />
            <ForecastCardStyle>
            <h2 className='forecast-h'>Next days forecast</h2>
            {dailyData[0].daily.map((dailies, index) => <ForecastCard key={index} {...dailies} />)}
            </ForecastCardStyle>
        </React.Fragment>
     );
}
 
export default WeatherPage;