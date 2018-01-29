import React, { Component } from 'react';
import { normalize } from 'path';

class CardNumberInput extends Component {

  state = {
    number: '',
    formNumber: ''
  }
  
  format = () => {
  }

  componentWillReceiveProps(nextProps) {
    const normNum = nextProps.cardNumber.replace(/ /g, '')
    const formNum = normNum.replace(/(.{4})/g,"$1 ")
    this.setState({number: formNum})
    console.log(formNum)
  }
  
  render() {
    return (
      <input onChange={this.props.onChange} value={this.state.number} />
    );
  }
}

export default CardNumberInput;
