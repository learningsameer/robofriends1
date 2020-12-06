import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

// const state={
// 	robots: robots,
// 	searchfield: "",
// }

class App extends Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield: " ",
		}
		// console.log("constructor");
	}

	onSearchChange= (event) => {
		this.setState({searchfield: event.target.value})
		// console.log(event.target.value);
		// const filteredRobots=this.state.robots.filter(robot=>{
		// 	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());			
		// 	});
		// console.log(filteredRobots);
	}

	componentDidMount(){
		// console.log("componentDidMount");
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=>this.setState({robots:users}));
		
	}

	render(){
		// destructuring to remove this.state.
		const {robots, searchfield }=this.state;
		const filteredRobots=robots.filter(robot=>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());			
		});
			// console.log("render");
		if(!robots.length){
			return <h1 className="tc"> Loading</h1>
		}
		else{
			return (
				<div className="tc">
					<h1 className="f1"> Robo Friends </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
				);
		}
		

	}

	
}

export default App;