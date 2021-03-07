import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

const useEventSource = (url) => {
  const [data, updateData] = useState(null);

  useEffect(() => {
    const source = new EventSource(url);

    source.onmessage = function (event) {
      console.log('SSE Client event ', JSON.parse(event.data))
      updateData(JSON.parse(event.data));
    }

    return () => {
      source.close()
    }
  }, [])

  return data;
}

function App() {
  const data = useEventSource('/sse');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(data)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
