import "./current-weather.css"

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                <p className="city">{data.city}</p>
                <p className="weather-description"> sunny</p>
            </div>
            <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>

            <div className="bottom">
                <p className="temprature">18°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like </span>
                        <span className="parameter-value">22°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">2 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">14 hpa</span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default CurrentWeather;