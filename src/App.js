
import React from 'react';
import HomePage from './pages/HomePage.js';
import NavigationMenu from './components/NavigationMenu'
import Footer from './components/Footer';
import Loading from './components/LoadingScreen'
import './App.css'

export default class App extends React.Component {
  constructor(props){
     super(props)
     this.state = {
        done: undefined
     }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ done: true });
      }, 1000);
   }, 1200);
  }
  
  render(){
     return(
       <div>
          {!this.state.done
          ? <header className="App-header">
              <Loading />
            </header>
          : <div>
              <NavigationMenu />
              <HomePage />
              <Footer />
            </div>
          }
        </div>
     )
  }
}