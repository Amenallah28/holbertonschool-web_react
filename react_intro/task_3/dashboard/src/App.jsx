import './App.css';
import holbertonLogo from './assets/holberton-logo.jpg';
import { getCurrentYear , getFooterCopy } from './utils';
import Notifications from './Notifications.jsx';

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" />
        <h1 style={{ color: '#e1003c' }}>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email'></input>
          <label htmlFor='paswword'>Password:</label>
          <input id='password' type='paswword' name='password'></input>
          <button id='btn' type='submit'>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy()} </p>
      </div>
    </div>
  );
}

export default App;
