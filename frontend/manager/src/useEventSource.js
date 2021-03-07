import { useEffect, useState } from 'react';

export function useEventSource(url) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    const source = new EventSource(url);

    source.onmessage = function (event) {
      console.log('SSE Client event ', JSON.parse(event.data));
      updateData(JSON.parse(event.data));
    };

    return () => {
      source.close();
    };
  }, []);

  return data;
}
