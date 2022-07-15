import React from 'react'
import useJsonFetch from '../castom_hook/useJsonFetch';

export default function Loading() {
  const [data, loading] = useJsonFetch(process.env.REACT_APP_LOADING_URL)

  if (loading) {
    return <progress />
  }
  return (
    <div>{`Data with loading: ${data.status}`}</div>
  )
}
