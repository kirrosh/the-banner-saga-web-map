import React, {Component} from 'react';
import DragScroll from 'react-dragscroll'
import './App.scss';
import MapObject from "./components/mapObject/MapObject";

const mapObjects = [
    {
        name: 'Wordan',
        className: 'wordan'
    },
    {
        name: 'Valkajokull',
        className: 'valkajokull'
    },
    {
        name: 'Setterlund',
        className: 'setterlund'
    },
    {
        name: 'Swartbog',
        className: 'swartbog'
    },
    {
        name: 'Dalalond',
        className: 'dalalond'
    },
    {
        name: 'Stromlund',
        className: 'stromlund'
    },
    {
        name: 'Rundwall',
        className: 'rundwall'
    },
    {
        name: 'Hraun',
        className: 'hraun'
    }
];

class App extends Component {
    render() {
        return (
            <div>
                <DragScroll height={window.innerHeight} width={'100%'}>
                    <div className='map'>
                        {mapObjects.map(obj => <MapObject
                                name={obj.name}
                                classNameObject={obj.className}
                                key={obj.className}
                            />
                        )}
                    </div>
                </DragScroll>
            </div>
        )
    }
}

export default App;
