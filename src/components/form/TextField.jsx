import React from 'react'
import InputMask from 'react-input-mask'
import { Controller } from 'react-hook-form'

const TextField = ({
  register,
  name,
  errors,
  type = 'text',
  label,
  mask,
  control
}) => {
  return (
    <div>
      <label htmlFor={name} className='form-label m-0'>
        {label}
      </label>
      {!mask ? (
        <input
          type={type}
          className='form-control'
          id={name}
          {...register(name)}
        />
      ) : (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <InputMask
              mask={mask}
              maskChar={null}
              value={field.value}
              onChange={field.onChange}
            >
              {(inputProps) => (
                <input className='form-control' {...inputProps} type='text' />
              )}
            </InputMask>
          )}
        />
      )}
      {errors[name] && errors[name]?.message && (
        <p className='text-danger mb-0'>{errors[name].message}</p>
      )}
    </div>
  )
}

export default TextField
