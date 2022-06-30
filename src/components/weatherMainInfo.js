const WeatherMainInfo = ({ weather }) => {
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>{weather?.location.region}</div>
      
      <div>
        <img
          src={`http:${weather?.current.condition.icon}`}
          width="128"
          alt={weather?.current.condition.text}
        />
      </div>
      <div>
        <div>{weather?.current.condition.text}</div>
        <div>{weather?.current.temp_c}º</div>
      </div>
    </div>
  );
};

export default WeatherMainInfo;
