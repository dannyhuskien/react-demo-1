import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {city: 'chicago'};
    this.update = this.update.bind(this);
    this.GetCityWeather = this.GetCityWeather.bind(this);
  }

   componentWillMount(){
     console.log('will');
   }

   componentDidMount(){
     console.log('did', this);
     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=692d9840933cc93352daaab2d7bb4ac7&units=imperial')
     .then((rsp) => {
       console.log('rsp:', rsp);
       this.setState({temp: rsp.main.temp});
     });
    // this.GetCityWeather();
   }


  update(){
    this.GetCityWeather();
  }

  GetCityWeather(){
    console.log('Get City Weather', this);
    const city = this.refs.city.value;
    // this.setState({city});
    console.log(this.state.city);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=692d9840933cc93352daaab2d7bb4ac7&units=imperial')
    .then((rsp) => {
      console.log('rsp:', rsp);
      this.setState({temp: rsp.main.temp, city});
    });
  }

  render(){
      console.log('render');
      console.log(this.state.temp);
  return (
        <div>
        <h1>Weather</h1>
        <input ref='city' type='text' />
        <button onClick={this.GetCityWeather}>Add</button>
        <div>{this.state.temp}</div>
      </div>
    );
  }
}

export default Weather;
