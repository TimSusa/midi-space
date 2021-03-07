import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    const tmp = [...value, '\n', text, '\n']
    setValue(tmp)
  }, [text])

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        style={{ width: '80vw' }}
        id="outlined-multiline-static"
        label="MIDI"
        multiline
        rows={16}
        defaultValue="Monitor"
        variant="outlined"
        value={value}
      />
    </form>
  );
}
