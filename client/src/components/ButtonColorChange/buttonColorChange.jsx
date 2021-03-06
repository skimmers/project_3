import React from 'react';

class ButtonColor extends React.Component {
    constructor(){
           super();
  
           this.state = {
                yellow: true
           }
      }
  
      changeColor(){
          this.setState({black: !this.state.yellow})
      }
  
      render(){
          let btn_class = this.state.yellow ? "Button" : "whiteButton";
  
          return (
               <div>
                   <button className={btn_class}
                           onClick={this.changeColor.bind(this)}>
                             Button
                    </button>
               </div>
          )
      }
  }

  export default ButtonColor;