import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { useFetch } from './use-fetch.js'

export function Devices() {
  const { status, data: inputs } = useFetch('/drivers/inputs')
  const { data: activeInput } = useFetch('/drivers/input')
  const { status: outputStatus, data: outputs } = useFetch('/drivers/outputs')
  const { data: activeOut } = useFetch('/drivers/output')
  return (
    <div>
      <Typography variant="h4">Input Devices: </Typography>
      <List>
        {(status === 'fetched') && JSON.parse(inputs).map((item, idx) => (
          <ListItem key={`in-midi-${idx}`} style={{ background: (item.includes(activeInput)) ? 'cornflowerblue' : 'none' }}>{item}</ListItem>
        ))}
      </List>
      <br></br>
      {(outputStatus === 'fetched') && JSON.parse(outputs).every((item) => item !== activeOut) && (
        <div>
          <Typography variant="h4">Active Output Device: </Typography>
          <Typography variant="h5">{activeOut} </Typography>
          <br></br>
        </div>)}
      <Typography variant="h4">Output Devices: </Typography>
      {(outputStatus === 'fetched') && (
        <List>
          {(JSON.parse(outputs)).map((itemm, idx) => (
            <ListItem key={`out-midi-${idx}`} style={{ background: (activeOut && itemm.includes(activeOut)) ? 'cornflowerblue' : 'none' }}>{itemm}</ListItem>
          ))}
        </List>)}
      <br></br>

    </div>
  );
}

