import React from 'react';
import './App.css';
import icon from './icon.png'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={icon} alt='icon'/>
                    <h2>Welcome to React</h2>
                </div>
            </div>
        );
    }
}
export default App;
