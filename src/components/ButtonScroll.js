import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import '../style/ButtonScroll.css'

export class ButtonScroll extends Component {
    constructor(props) { // Init props and state
		super(props);
		this.state = { visible: false};
		this.handleScroll = this.handleScroll.bind(this);
  	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	  
	handleScroll(){
		const scrolled = document.documentElement.scrollTop
		if (scrolled > 400){
			this.setState({visible:true})
		} else if (scrolled <= 400){
			this.setState({visible:false})
		}
	}

	scrollToTop(){
		window.scrollTo({
			top: 0, 
			behavior: 'smooth'
			/* you can also use 'auto' behaviour
				in place of 'smooth' */
		});
	}
  render() {
    return (
        <Button variant="primary" className="btn-to-top" onClick={this.scrollToTop} style={{display: this.state.visible ? 'inline' : 'none'}}>
   <i class="fa-solid fa-up-long"></i>
        </Button>
    )
  }
}

export default ButtonScroll