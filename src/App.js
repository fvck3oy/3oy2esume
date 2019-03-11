import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route, withRouter } from 'react-router-dom'
import Apriori from './Apriori'
import Resume from './Resume'

class App extends Component {
  componentDidMount(){

  }
	render() {
		return (
			<Router basename={'/'}>
				<Switch>
          <Route exact path="/" component={Resume} />
					<Route exact path="/apriori" component={Apriori} />
				</Switch>
			</Router>
		)
	}
}

export default App
