import React from 'react'
import useJsonFetch from '../castom_hook/useJsonFetch';

export default function Data() {
  const [data] = useJsonFetch(process.env.REACT_APP_DATA_URL)

  return (
    <div>{`Data: ${data.status}`}</div>
  )
}
