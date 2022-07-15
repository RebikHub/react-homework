import React from 'react'
import useJsonFetch from '../castom_hook/useJsonFetch';

export default function Error() {
  const [data, loading, error] = useJsonFetch(process.env.REACT_APP_ERROR_URL)

  return (
    <div>{`Error: ${error && error.status}`}</div>
  )
}
