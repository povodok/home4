import React, { Component } from 'react';
import Modal from './Modal'
import './ModalButton.css'

class ModalButton extends Component {

  state = {
    isModalShow: false
  }

  hideModal = () => {
    this.setState({isModalShow: false})
  }

  showModal = () => {
    this.setState({isModalShow: true})
  }

  render() {
    return(
      <div>
        <button onClick={this.showModal}>Modal!</button>
        {this.state.isModalShow ? 
          <Modal domNode={document.querySelector('#modal')}>
            <div className="modal modal__body">
              <h3>It is modal window! Click to close!</h3>
              <button onClick={this.hideModal} className="modal__fog" />
            </div>
          </Modal>
        : null
        }
      </div>
    )    
  }
}

export default ModalButton;
