// components/SignupForm.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signupUser } from '../../../redux/slices/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      dispatch(signupUser(values));
    },
  });

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 text-sm">{formik.errors.username}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={authStatus === 'loading'}
          className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          Signup
        </button>

        {authStatus === 'failed' && <div className="text-red-500 text-sm">{authError}</div>}
      </form>
    </div>
  );
};

export default Signup;
