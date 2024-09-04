import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BookingForm.css';

const BookingForm = ({ service, onClose }) => {

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number is not valid')
      .required('Phone number is required'),
    datetime: Yup.string().required('Date and time are required'),
  });

  // Use the form handler from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Submission handler
  const onSubmit = (data) => {
    console.log('Form Submitted:', data);

    // Display success message using toast
    toast.success('Booking successful!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Close the modal after a brief delay
    setTimeout(() => {
      if (onClose) onClose();
    }, 1000);
  };

  // Render the form
  return (
    <div className='dbf'>
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
          {errors.serviceName && <div className="invalid-feedback">{errors.serviceName.message}</div>}
        </div>
        <div className="form-group">
          <label className='fla'>Name</label>
          <input
            type="text"
            className={`fc ${errors.name ? 'is-invalid' : ''}`}
            {...register('name')}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>
       
        <div className="form-group">
          <label className='fla'>Phone</label>
          <input
            type="tel"
            className={`fc ${errors.phone ? 'is-invalid' : ''}`}
            {...register('phone')}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
        </div>
        <div className="form-group">
          <label className='fla'>Date and Time</label>
          <input
            type="datetime-local"
            className={`fc ${errors.datetime ? 'is-invalid' : ''}`}
            {...register('datetime')}
          />
          {errors.datetime && <div className="invalid-feedback">{errors.datetime.message}</div>}
        </div>
        <button type="submit" className="bt">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default BookingForm;
