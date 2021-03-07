import { Monitor } from './monitor/Monitor.js'
import { Devices } from './Devices.js'
import logo from './logo-midi.svg';
import './App.css';
import { useEventSource } from './useEventSource';

function App() {
  const data = useEventSource('/sse');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Devices></Devices>
        <Monitor text={JSON.stringify(data) || 'No Data'}></Monitor>
      </header>
    </div>
  );
}

export default App;

