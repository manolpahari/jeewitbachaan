import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/layout/navbar/Navigation';
import Banner from '../components/layout/banner/Banner';
import FeaturedVideo from '../components/dashboard/FeaturedVideos';
import Footer from '../components/layout/footer/Footer';
import Watch from '../components/tabs/watch/Watch';
import Listen from '../components/tabs/listen/Listen';
import Read from '../components/tabs/read/Read';


class App extends Component {
  constructor() {
    super();
    this.state = {
      apiRequestParameter: {
        apiKey : "AIzaSyAfSjoAH2T9ojI80aGbvsx24BSM1coOsgI",
        maxResults : 9,
        order: 'date',
        type: 'video',
        channelId: 'UCaZrvuy_4QsClMYRCcbyMjQ'
      },
      videosData: [],
      route: 'home'
    }
  }
 
  componentDidMount () {
    const fullURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.state.apiRequestParameter.channelId}&maxResults=${this.state.apiRequestParameter.maxResults}&order=${this.state.apiRequestParameter.order}&type=${this.state.apiRequestParameter.type}&key=${this.state.apiRequestParameter.apiKey}`;
    fetch(fullURL)
    .then(resp => resp.json())
    .then(data => this.setState({ videosData: data.items }))
    .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if(route === 'watch') {
     return this.setState({ ...this.state, route: 'watch' })
    }if(route === 'listen') {
      return this.setState({ ...this.state, route: 'listen'})
    }if(route === 'read') {
      return this.setState({ ...this.state, route: 'read'})
    }
    else {
     return this.setState({ route: 'home'})
    }
  }


  render() {
    const { route, videosData } = this.state;
    return (
      <div className="App">
        <Navbar onRouteChange={this.onRouteChange}/>
        <Banner onRouteChange={this.onRouteChange}/>
        {
         route === 'home' ?
          <div>
            <FeaturedVideo videosData={videosData}/>  
          </div> :
        route === 'watch' ?
          <div>
            <Watch onRouteChange={this.onRouteChange}/>
          </div> :
          route === 'listen' ?
          <div>
            <Listen onRouteChange={this.onRouteChange}/> 
          </div> :
          route === 'read' ?
          <div>
            <Read onRouteChange={this.onRouteChange}/>
          </div> : null
        }
      <Footer/>    
      </div>
    );
  }
}

export default App;
