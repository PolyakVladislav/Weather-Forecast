import HourlyForecastWidget from './HourlyForecastWidget';
import DailyForecastWidget from './DailyForecastWidget';
import '../styles/components/Forecast.scss';
import HorizontallyScrollable from './HorizontallyScrollable';

function Forecast({ title, type, data }) {
  const filteredData =
    type === 'hourly'
      ? data.filter((singleData) => {
          const dateObj = new Date(singleData.date);
          return !isNaN(dateObj.getTime()) && dateObj.getHours() % 3 === 0;
        })
      : data;

  return (
    <div className='Forecast'>
      <div className='forecast-container'>
        <h3>{title}</h3>
        <HorizontallyScrollable className='widget-container'>
          {filteredData.map((singleData) => (
            <div key={singleData.date || singleData.day}>
              {type === 'hourly' ? (
                <HourlyForecastWidget data={singleData} />
              ) : (
                <DailyForecastWidget data={singleData} />
              )}
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </div>
  );
}

export default Forecast;

