import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useResume } from '../components/hook/useResume'

const ResumePage = () => {
  const resumes = useResume()
  let { userId } = useParams()
  const navigate = useNavigate()

  if (!resumes) {
    return <p>Нет данных</p>
  }

  const handleClick = () => {
    navigate(`/edit/${userId}`)
  }

  const resume = resumes.find((resume) => resume.id === userId)
  const getAge = () => {
    let frase
    const age = new Date().getFullYear() - resume.birthyear
    if (age % 10 === 1) {
      frase = ' год'
    } else if (age % 10 >= 2 && age % 10 <= 4) {
      frase = ' года'
    } else frase = ' лет'
    return age + frase
  }
  if (resume) {
    return (
      <div>
        <p className='fs-4 fst-normal mt-3 mb-0'>Имя: {resume.name}</p>
        <p className='fs-4 fst-normal mb-3'>Фамилия: {resume.lastname}</p>
        <p className='fs-6 fst-normal mb-1'>Email: {resume.email}</p>
        <p className='fs-6 fst-normal mb-1'>Тел.: {resume.phone}</p>
        <p className='fs-6 fst-normal mb-1'>
          Год рождения: {resume.birthyear} ({getAge()})
        </p>
        <p className='fs-6 fst-normal mb-1'>
          Портфолио:{' '}
          <a
            href={resume.portfolio}
            className='link-success'
            style={{ textDecoration: 'none' }}
          >
            {resume.portfolio}
          </a>
        </p>

        <button
          className='btn btn-sm btn-outline-secondary mt-3'
          onClick={handleClick}
        >
          Редактировать
        </button>
      </div>
    )
  } else return null
}

export default ResumePage
