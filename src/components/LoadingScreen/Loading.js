import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

import * as legoData from "../../assets/loading/410-lego-loader.json"
import * as doneData from "../../assets/loading/10913-done-icon-animation.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
     preserveAspectRatio: "xMidYMid slice"
  }
};
export default class Loading extends React.Component {
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
          ? <FadeIn>
              <div>
                <h1>Loading portfolio</h1>
                {!this.state.loading ? (
                  <Lottie options={defaultOptions} height={120} width={120} />
                ) : (
                  <Lottie options={defaultOptions2} height={120} width={120} />
                )}
              </div>
            </FadeIn>
          : <></>
          }
        </div>
     )
  }
}