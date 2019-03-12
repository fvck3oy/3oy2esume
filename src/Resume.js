import React, { Component } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'reactstrap'
import axios from 'axios'
import EachGit from './EachGit'

class Resume extends Component {
	constructor(props) {
		super(props)
		this.state = { data: [], data2: '' }
	}

	async getData() {
		await axios.get(`https://api.github.com/users/fvck3oy/repos`).then(res => {
			console.log('data : ', res)
			const { data } = res

			// console.log('data0', data[0].title)
			this.setState({ data: data })
			console.log('test :', data[0])
		})

	
	}

	componentDidMount() {
		this.getData()
		document.title = 'PuminResume'
	}

	render() {
		return (
			<Container>
				<Row className="des-profile intro m-1 justify-content-center">
					<h3>BOY RESUME</h3>
					{/* <h1 class="testhover animated infinite bounce delay-2s">Example</h1> */}
				</Row>
				<Row className="d-flex intro des-profile justify-content-center">
					<div className="fig outline-effect-profile m-3">
						<img
							src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/1914830_921993561221927_4622623895927560860_n.jpg?_nc_cat=111&_nc_ht=scontent.fbkk8-3.fna&oh=d3e5f4c334269cbba236d10a4132ea4e&oe=5CB88D44"
							className="pic-profile img-responsive"
							alt="profile"
						/>
					</div>
					<Row>
						<Col md={12}>
							<div className="des-profile outline-effect m-3 p-4">
								Name : Pumin Swangjang
								<br />
								Nickname : Boy
								<br />
								Facebook :{' '}
								<span className="animated infinite flash delay-1s">
									<a href="https://www.facebook.com/boy.reallife">Click !</a>
								</span>{' '}
								<br />
								Email : realxiz.zixlaer@hotmail.com <br />
								Birthday : 17 / 08 / 1996
								<br />
								Age : 22
								<br />
								Major : Department of Computer Engineering
								<br />
								Education : Prince of Songkla University, Phuket Campus
								<br />
							</div>
						</Col>
					</Row>
				</Row>
				{/* ----------------------------------------------------------- */}

				<Row>
					<Col md={12}>
						<div className="title-git">
							<i className="fab fa-github m-3" />
							Github Repositories
						</div>
					</Col>
				</Row>

				{/* ----------------------------------------------------------- */}

				<Row className="d-flex intro des-profile">
					{this.state.data.map(each => {
						return <EachGit key={each.id} name={each.name} language={each.language} link={each.clone_url} />
					})}
				</Row>
			</Container>
		)
	}
}

export default Resume

// import React, { Component } from 'react'
// class App extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = { value: 0, count: 0 }
// 	}
// 	handleChange = e => {
// 		const { name, value } = e.target
// 		this.setState({ [name]: value })
// 	}
// 	add = () => {
// 		this.setState({ count: this.state.count + 1 })
// 	}
// 	minus = () => {
// 		this.setState({ count: this.state.count - 1 })
// 	}
// 	render() {
// 		const { value } = this.state
// 		return (
// 			<div>
// 				<h1>Counter</h1>
// 				{this.state.count} <br />
// 				<button onClick={this.add}> Add </button>
// 				<button onClick={this.minus}> Minus </button> <br />
// 				<input value={value} name="value" onChange={this.handleChange} /> <br />
// 				<SheetLine base={this.state.value} multiply={1} />
// 				<SheetLine base={value} multiply={2} />
// 				<SheetLine base={value} multiply={3} />
// 				<SheetLine base={value} multiply={4} />
// 				<SheetLine base={value} multiply={5} />
// 			</div>
// 		)
// 	}
// }
// class SheetLine extends Component {
// 	render() {
// 		const { base, multiply } = this.props
// 		return (
// 			<div>
// 				{base} * {multiply} = {base * multiply}
// 			</div>
// 		)
// 	}
// }
// export default App
