import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useResume } from '../components/hook/useResume'

const colors = ['primary', 'secondary', 'info', 'success', 'warning']
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}
const getRandomColor = () => {
  const index = randomInteger(0, colors.length - 1)
  return `link-${colors[index]}`
}

const MainPage = () => {
  const resume = useResume()

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/create')
  }

  return (
    <div>
      <p className='fs-4 fst-normal mt-3 mb-3'>Карточки студентов:</p>
      {!resume ? (
        <p className='fs-6 fst-normal'>Нет данных</p>
      ) : (
        resume.map((res) => {
          return (
            <NavLink
              className={getRandomColor}
              style={{ textDecoration: 'none' }}
              to={`/resume/${res.id}`}
              key={res.id}
            >
              <div>
                {res.name} {res.lastname}
              </div>
            </NavLink>
          )
        })
      )}
      <button
        className='btn btn-sm btn-outline-secondary mt-3'
        onClick={handleClick}
      >
        Добавить
      </button>
    </div>
  )
}

export default MainPage
