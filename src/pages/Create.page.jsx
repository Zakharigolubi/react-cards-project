import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextField from '../components/form/TextField'
import { validateSchema } from '../utils/validate'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { nanoid } from 'nanoid'
import { useResume } from '../components/hook/useResume'

const textFields = [
  { name: 'name', label: 'Имя' },
  { name: 'lastname', label: 'Фамилия' },
  { name: 'email', type: 'email', label: 'Электронная почта' },
  {
    name: 'phone',
    label: 'Номер телефона для связи',
    mask: '+7 (999) 999-99-99'
  },
  { name: 'birthyear', type: 'number', label: 'Год рождения' },
  { name: 'portfolio', label: 'Портфолио' }
]

const CreatePage = () => {
  let { userId } = useParams()
  const isEditPage = !!userId

  const resumes = useResume()
  const resume = resumes.find((resume) => resume.id === userId)

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validateSchema),
    defaultValues: { phone: '' }
  })

  useEffect(() => {
    if (resume) {
      reset({ ...resume })
    }
  }, [resume])
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const id = nanoid()
    data.id = id
    const resumeLS = localStorage.getItem('resume')
    if (!resumeLS) {
      localStorage.setItem('resume', JSON.stringify([data]))
    } else {
      const arrResume = JSON.parse(resumeLS)
      if (isEditPage) {
        const index = arrResume.findIndex((resume) => resume.id === userId)
        arrResume[index] = data
        localStorage.setItem('resume', JSON.stringify(arrResume))
      } else {
        arrResume.push(data)
        localStorage.setItem('resume', JSON.stringify(arrResume))
      }
    }
    toast('Данные обновлены', { autoClose: 2000 })
    setTimeout(() => {
      navigate(`/resume/${id}`)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {textFields.map((el) => {
        return (
          <TextField
            key={el.name}
            register={register}
            errors={errors}
            name={el.name}
            label={el.label}
            type={el.type}
            control={control}
            mask={el.mask}
          />
        )
      })}

      <button type='submit' className='btn btn-sm btn-outline-secondary mt-4'>
        {!isEditPage ? 'Создать' : 'Обновить'}
      </button>
    </form>
  )
}

export default CreatePage
