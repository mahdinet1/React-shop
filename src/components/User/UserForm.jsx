import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = (props) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
      name:'',
      address:'',
    },
    onSubmit: values => {
      console.log(values)
      props.history.push('/')
    },
    validationSchema: Yup.object({
      email: Yup.string().email('invalid email').required(),
      name:Yup.string().max(20,'its too long').required().test('empty-check','must not be empty',names=> !names|| names.trim().length>0),
      address:Yup.string().required().test('empty-check','must not be empty',address=> !address || address.trim().length>0),
    })
  });
  return (
    <form onSubmit={formik.handleSubmit} className="needs-validation p-2">
      <div className="col-4 m-3">
        <label htmlFor="email" className="form-label">Email Address :</label>
        <input
          className={` form-control  ${(formik.errors.email && formik.touched.email) ? "is-invalid" : "is-valid"}`}
          id="email"
          name="email"
          type="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="please type your email address"
        />
        <div className="invalid-feedback">
          <p>{formik.errors.email}</p>
        </div>
      </div>
      <div className="col-4 m-3">
        <label htmlFor="name" className="form-label">name :</label>
        <input
          className={` form-control  ${(formik.errors.name && formik.touched.name) ? "is-invalid" : "is-valid"}`}
          id="name"
          name="name"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="please type your full name"
        />
        <div className="invalid-feedback">
          <p>{formik.errors.name}</p>
        </div>
      </div>
      <div className="col-8 m-3">
        <label htmlFor="address" className="form-label">Address :</label>
        <textarea
          className={` form-control ${(formik.errors.address && formik.touched.address) ? "is-invalid" : "is-valid"}`}
          id="address"
          name="address"
          rows="3"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.address}
          placeholder="please type your address"
        />
        <div className="invalid-feedback">
          <p>{formik.errors.address}</p>
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-25 me-5">Submit</button>
    </form>
  );
};


export default UserForm
