import React, { useRef, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@unform/core';
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, ...rest }) {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <>
      <ReactDatePicker
        ref={datepickerRef}
        placeholderText="18/04/1988"
        maxDate={new Date()}
        {...rest}
      />
      {error ? <span>{error}</span> : null}
    </>
  );
}
