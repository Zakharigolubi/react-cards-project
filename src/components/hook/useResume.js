import { useEffect, useState } from 'react'

export const useResume = () => {
  const [resume, setResume] = useState([])
  useEffect(() => {
    const data = localStorage.getItem('resume')
    if (data) {
      setResume(JSON.parse(data))
    }
  }, [])
  return resume
}
