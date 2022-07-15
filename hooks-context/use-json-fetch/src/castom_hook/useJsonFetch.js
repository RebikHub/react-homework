import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        return resp.text().then(err => {
          throw err
        })
      })
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(err => {
        setError(JSON.parse(err))
        setLoading(false)
    })
  }, [])

  return [data, loading, error]
}