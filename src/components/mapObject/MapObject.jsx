import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Map.scss';

class MapObject extends Component {
    constructor(props){
        super(props);
        const {classNameObject} = props;
        this.state = {
            class: classNameObject
        };
    }
    onClick(){
        const {showModal, name} = this.props;
        showModal(name)
    }
    onMouseOver(){
        this.setState((prevState, props) => ({...prevState, class: props.classNameObject + '-bg'}))
    }
    onMouseOut(){
        this.setState((prevState, props) => ({...prevState, class: props.classNameObject}))
    }

    render() {
        const {classNameObject} = this.props;
        return (
            <div className={this.state.class}>
                <div className={classNameObject + '-inner'}
                     onClick={this.onClick.bind(this)}
                     onMouseOver={this.onMouseOver.bind(this)}
                     onMouseOut={this.onMouseOut.bind(this)}
                >
                </div>
            </div>
        )
    }
}
MapObject.propTypes = {
    name: PropTypes.string,
    classNameObject: PropTypes.string,
    showModal: PropTypes.func
};

export default MapObject;
