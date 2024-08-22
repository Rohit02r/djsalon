import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const BookingForm = ({ service }) => {
  // Define the Yup schema for validation
  const validationSchema = Yup.object().shape({
    
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number is not valid')
      .required('Phone number is required'),
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
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
        <label>Service</label>
        <input
          type="text"
          className={`form-control ${errors.serviceName ? 'is-invalid' : ''}`}
          {...register('serviceName')}
          defaultValue={service || ''}
          readOnly
        />
        <div className="invalid-feedback">{errors.serviceName?.message}</div>
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          {...register('name')}
        />
        <div className="invalid-feedback">{errors.name?.message}</div>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          {...register('email')}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          {...register('phone')}
        />
        <div className="invalid-feedback">{errors.phone?.message}</div>
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          className={`form-control ${errors.date ? 'is-invalid' : ''}`}
          {...register('date')}
        />
        <div className="invalid-feedback">{errors.date?.message}</div>
      </div>
      <div className="form-group">
        <label>Time</label>
        <input
          type="time"
          className={`form-control ${errors.time ? 'is-invalid' : ''}`}
          {...register('time')}
        />
        <div className="invalid-feedback">{errors.time?.message}</div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default BookingForm;
