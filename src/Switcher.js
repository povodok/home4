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
    const id = event.target.id;
    this.setState({selectedChild: id});
  } 

  render() {
    const children = React.Children.toArray(this.props.children)
    const ComponentName = children[this.state.selectedChild].type.name
    return (
      <div>
        <nav>
          <ul className="component-list">
            {children.map((child, i) => (
              <li key={i} onClick={this.handleChangeChild} id={i} data-id={i} className="component-list__name">{child.type.displayName || child.type.name}</li>
            ))}
          </ul>
        </nav>
        <hr/>
        <div className="component-wrapper">
          <ComponentName />
        </div> 
      </div>
    );
  }
}

export default Switcher;
