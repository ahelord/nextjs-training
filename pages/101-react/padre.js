import React, { Component } from 'react';
import HolaMundo from './HolaMundo';
import styles from '../../styles/HolaMundo.module.css';
import Hijo from './Hijo';
import Counter from '../../components/counter';
class Padre extends Component {

	constructor(props) {
		console.log(props);
		super(props);
		this.state = {
			brand: 'Ford',
			model: 'Mustang',
			color: 'red',
			year: 1964,
			count: 1
		};
	}
  changeColor = () => {
  	this.setState({
  		color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
  	});
  }

  changeCount = () => {
  	const count = this.state.count + 1;
  	this.setState({
  		count: count
  	});
  }
  render() {
  	return (
  		<div style={{ color: this.state.color }} className={styles.h1}>

  			{/* Se rompe por que las propiedas que espera es string saludo*/}
  			{/*               <Hijo saludo={12} otra={"Adios"} />*/}

  			{/* Componente hijo */}
  			<Hijo saludo="hola" otra={'Adios'} />
  			{/* Componente Counter  */}
  			<Counter value={123} />
  			<HolaMundo />

  			<h1>My {this.state.brand}</h1>
  			<p>
          Color {this.state.color}
  				<br></br>
              Count {this.state.count}
  			</p>
  			<button
  				type="button"
  				onClick={this.changeColor}
  			>Change color</button>

  			<button
  				type="button"
  				onClick={this.changeCount}
  			>Change count</button>

  		</div>
  	);
  }
}

export default Padre;