import React, { Component } from 'react';
import HolaMundo from "./HolaMundo";
import styles from '../styles/HolaMundo.module.css'
import Hijo from "./Hijo";
class Padre extends Component {
    
    constructor(props) {
    console.log(props)
        super(props);
        this.state = {
          brand: "Ford",
          model: "Mustang",
          color: "red",
          year: 1964,
          count:1
        };
      }
      changeColor = () => {
        
        const count = this.state.count+1;
        this.setState({count: count});
      }
      render() {
        return (
          <div className={styles.h1}>

{/* Se rompe por que las propiedas que espera es string saludo
 */}{/*               <Hijo saludo={12} otra={"Adios"} />
 */}
    
    <Hijo saludo="hola" otra={"Adios"} />
              <HolaMundo/>
            <h1>My {this.state.brand}</h1>
            <p>
              It is a {this.state.color}
              {this.state.model}
              from {this.state.year}.
              count {this.state.count}
            </p>
            <button
              type="button"
              onClick={this.changeColor}
            >Change color</button>
          </div>
        );
      }
}

export default Padre;