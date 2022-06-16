import React from 'react';
import 'weather.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
        <p>Temperature: {weatherData.main.temp}</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Day: {moment().format('dddd')}</p>
        <p>Date: {moment().format('LL')}</p>
    </Card.Content>
  </Card>
)

export default CardExampleCard;