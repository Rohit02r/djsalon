import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './BookingForm.css'
const BookingForm = ({ service }) => {
  // Define the Yup schema for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number is not valid')
      .required('Phone number is required'),
    datetime: Yup.string().required('Date and time are required'),
  });

  // Use react-hook-form with Yup validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className='fla'>Service</label>
        <input
          type="text"
          className={`fc ${errors.serviceName ? 'is-invalid' : ''}`}
          {...register('serviceName')}
          defaultValue={service || ''}
          readOnly
        />
        <div className="invalid-feedback">{errors.serviceName?.message}</div>
      </div>
      <div className="form-group">
        <label className='fla'>Name</label>
        <input
          type="text"
          className={`fc ${errors.name ? 'is-invalid' : ''}`}
          {...register('name')}
        />
        <div className="invalid-feedback">{errors.name?.message}</div>
      </div>
      
      <div className="form-group">
        <label className='fla'>Phone</label>
        <input
          type="tel"
          className={`fc ${errors.phone ? 'is-invalid' : ''}`}
          {...register('phone')}
        />
        <div className="invalid-feedback">{errors.phone?.message}</div>
      </div>
      <div className="form-group">
        <label className='fla'>Date and Time</label>
        <input
          type="datetime-local"
          className={`fc ${errors.datetime ? 'is-invalid' : ''}`}
          {...register('datetime')}
        />
        <div className="invalid-feedback">{errors.datetime?.message}</div>
      </div>
      <button type="submit" className="bt">Submit</button>
    </form>
  );
};

export default BookingForm;
