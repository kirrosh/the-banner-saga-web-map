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
            showModal: true,
            modalTitle: 'start'
        }
    }
    closeModal(){
        this.setState((prevState, props) => ({
            ...prevState,
            showModal: false
        }))
    }
    showModal(title){
        this.setState((prevState, props) => ({
            ...prevState,
            showModal: true,
            modalTitle: title
        }))
    }

    render() {
        return [
            <DragScroll
                height={this.state.height}
                width={this.state.width}
                key='map'
            >
                <div className='map'>
                    {mapObjects.map(obj => <MapObject
                            name={obj.name}
                            classNameObject={obj.className}
                            key={obj.className}
                            showModal={this.showModal.bind(this)}
                        />
                    )}
                </div>
            </DragScroll>,
            <Modal
                key="modal"
                isOpen={this.state.showModal}
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
                    <h1 className='modal-title'>{this.state.modalTitle}</h1>
                    <button
                        className='modal-close-btn'
                        onClick={this.closeModal.bind(this)}>close</button>
                </div>
            </Modal>
        ]

    }
    updateDimensions() {
        this.setState((prevState, props) => ({width: window.innerWidth, height: window.innerHeight}));
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default App;
