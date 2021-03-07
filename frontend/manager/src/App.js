import Button from '@material-ui/core/Button';
import { Monitor } from './monitor/Monitor.js'
import { Devices } from './Devices.js'
import logo from './logo-midi.svg';
import './App.css';
import { useEventSource } from './useEventSource';
import Typography from '@material-ui/core/Typography';

function App() {
  const data = useEventSource('/sse');
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2">MIDI SPACE </Typography>

        <div style={{ textAlign: 'left', width: '100%' }}>
          <Button style={{ background: 'cornflowerblue' }} variant="contained" href="/keyboard">Virtual Keyboard</Button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <Devices></Devices>
        <Monitor text={data || 'No Data'}></Monitor>
      </header>
    </div>
  );
}

export default App;

