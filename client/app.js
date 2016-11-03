import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Header from './Header';
 
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

