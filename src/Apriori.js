import React, { Component } from 'react'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'


class Apriori extends Component {
  componentDidMount(){
    document.title = "Apriori"
  }
	render() {
		return (
			<div class="container">
				<div class="row">
        <h1>Apriori</h1>
					<div class="col-12">
						<div  class="">
							<div class="row mt-3 mb-3">
								<div class="col-6">
									<label>Number of Transaction</label>
									<input type="number" id="" class="outline-effect" placeholder="please fill number of transaction" value="4" />
								</div>
							</div>
							<div class="mt-3 mb-3">
								<label>ItemSet</label>
								<br />
								<textarea id="itemSet" class="outline-effect">
									Apple,Cereal,Diapers Beer,Cereal,Eggs&#10;Apple,Beer,Cereal,Eggs&#10;Beer,Eggs
								</textarea>
							</div>
							<div class="support-input row mt-3 mb-3">
								<div class="col-6">
									<label for="inline_field">Min Support </label>
									<input type="number" id="minSup" class="outline-effect" placeholder="please fill number (%)" value="50" />
								</div>

								<div class="col-6">
									<label for="warning_field">Con Support </label>
									<input type="number" id="minCon" class="outline-effect" placeholder="please fill number (%)" value="50" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-3 mb-3">
					<span class="btn-cal" onclick="cal();">
						Calculate
					</span>
				</div>

				<div class="mt-5">
					<h3 class="">Frequent ItemSet</h3>
					<div id="texts" class="">
						<div class="">
							<div id="result1" />
						</div>
					</div>
				</div>

				<div class="mt-5">
					<h3 class="">Strong Association Rule</h3>
					<div id="texts" class="">
						<div class="">
							<div id="result2" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Apriori
