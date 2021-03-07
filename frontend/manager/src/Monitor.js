import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MonitorTable from './MonitorTable.js'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function Monitor(props) {
  const { text } = props
  const classes = useStyles();
  const [value, setValue] = React.useState([]);


  useEffect(() => {
    const { in: inpT, channel, note, velocity, _type } = JSON.parse(text) || {}
    const tmp = value.concat({ input: inpT, channel, note, velocity, _type })
    const tpm = tmp.filter((item) => !!item.input)
    setValue(tpm)
  }, [text])
  return (
    <React.Fragment>
      <MonitorTable rows={value}></MonitorTable>
    </React.Fragment>

  );
}
