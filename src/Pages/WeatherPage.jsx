import React from 'react';
import ForecastCard from '../Components/Forecast Card/forecast-card.component';
import MainCard from '../Components/Main Card/main-card.component';


const WeatherPage = ({weatherData, dailyData}) => {
    return ( 
        <React.Fragment>
            <MainCard {...weatherData} />
            {dailyData[0].daily.map((dailies, index) => <ForecastCard key={index} {...dailies} />)}
        </React.Fragment>
     );
}
 
export default WeatherPage;