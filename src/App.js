import React, {Component} from 'react';
import DragScroll from 'react-dragscroll'
import './App.scss';
import MapObject from "./components/mapObject/MapObject";
import {mapObjects} from "./constants/MapObjects";
import Modal from 'react-modal';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: '100%',
            height: window.innerHeight,
            showModal: false,
            modalTitle: 'start',
            modalText: ''
        }
    }
    closeModal(){
        this.setState((prevState, props) => ({
            ...prevState,
            showModal: false
        }))
    }
    showModal(title, text){
        this.setState((prevState, props) => ({
            ...prevState,
            showModal: true,
            modalTitle: title,
            modalText: text
        }))
    }

    render() {
        const mapObjectComponentsList = mapObjects.map(obj => <MapObject
                classNameObject={obj.className}
                key={obj.className}
                onClick={this.showModal.bind(this, obj.name, obj.text)}
            />
        );
        return [
            <DragScroll
                height={this.state.height}
                width={this.state.width}
                key='map'
            >
                <div className='map'>
                    {mapObjectComponentsList}
                </div>
            </DragScroll>,
            <Modal
                key="modal"
                isOpen={this.state.showModal}
                ariaHideApp={false}
                className={{
                    base: 'modal-content',
                    afterOpen: 'modal-content_after-open',
                    beforeClose: 'modal-content_before-close'
                }}
                overlayClassName={{
                    base: 'modal-overlay',
                    afterOpen: 'modal-overlay_after-open',
                    beforeClose: 'modal-overlay_before-close'
                }}
                contentLabel={this.state.modalTitle}
            >
                <div className='modal-inner-container'>
                    <span className='modal-title'>{this.state.modalTitle}</span>
                    <span className='modal-text'>{this.state.modalText || ' '}</span>
                </div>
                <img src='https://imgur.com/AhhINAe.png' className='modal-close-btn' alt='CLose' onClick={this.closeModal.bind(this)}></img>
            </Modal>
        ]

    }
    updateDimensions() {
        this.setState((prevState, props) => ({width: window.innerWidth, height: window.innerHeight}));
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default App;
