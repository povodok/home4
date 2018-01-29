import React, { Component } from 'react';
import './Switcher.css';
import CardNumberHolder from './CardNumberHolder';
import ModalButton from './ModalButton';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  }

  handleChangeChild = event => {
    const id = parseInt(event.target.getAttribute('data-id'), 10);
    this.setState({selectedChild: id});
  } 

  renderChildComponent() {
    if (this.state.selectedChild === 1) {
      return (<ModalButton />)
    } else if (this.state.selectedChild === 0) {
      return (<CardNumberHolder />)
    }
  }

  render() {
    const children = React.Children.toArray(this.props.children);

    return (
      <div>
        <nav>
          <ul className="component-list">
            {children.map((child, i) => (
              <li key={i} onClick={this.handleChangeChild} data-id={i} className="component-list__name">{child.type.displayName || child.type.name}</li>
            ))}
          </ul>
        </nav>
        <hr/>
        <div className="component-wrapper">{(this.renderChildComponent())}</div> 
      </div>
    );
  }
}

export default Switcher;
