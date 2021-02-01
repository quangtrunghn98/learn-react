import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/FormControl/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('please enter title'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(value);
    }
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="todo" form={form} />
    </form>
  );
}

export default TodoForm;
