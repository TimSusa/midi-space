import React, { useEffect } from 'react';
import MonitorTable from './MonitorTable.js'

export function Monitor(props) {
  const { text } = props
  const [value, setValue] = React.useState([]);

  useEffect(() => {
    const { in: inpT, channel, note, velocity, _type } = JSON.parse(text) || {}
    const tmp = value.concat({ input: inpT, channel, note, velocity, _type })
    const tpm = tmp.filter((item) => !!item.input)
    setValue(tpm)
  }, [props])

  return (
    <MonitorTable rows={value}></MonitorTable>
  );
}
