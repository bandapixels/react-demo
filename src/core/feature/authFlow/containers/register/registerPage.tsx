import React, { ChangeEvent, useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useDispatch } from 'react-redux';
import styles from '../../../../shared/authStyles/authStyles.module.scss';
import { RegisterAct } from '../../authFlow.actions';
import { RegisterData } from '../../../../shared/interfaces/registerData';

export const RegisterPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const [values, setValues] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (): void => {
    dispatch(new RegisterAct(values));
  };

  return (
    <Container className={styles.wrapper}>
      <Box className={styles.box}>
        <Typography className={styles.tittle} variant="subtitle1">
          Register your account
        </Typography>
        <ValidatorForm onSubmit={handleSubmit}>
          <Box className={styles.inputGroup}>
            <TextValidator
              label="name"
              name="name"
              onChange={handleChange}
              required
              value={values.name}
              className={styles.input}
            />
            <TextValidator
              label="email"
              name="email"
              type="text"
              value={values.email}
              required
              onChange={handleChange}
              validators={['isEmail']}
              errorMessages={['email is not valid']}
              className={styles.input}
            />
            <TextValidator
              label="password"
              name="password"
              type="password"
              value={values.password}
              required
              onChange={handleChange}
              className={styles.input}
            />
          </Box>
          <Button type="submit" className={styles.authButton} color="primary" variant="contained">
            Sign in
          </Button>
        </ValidatorForm>
      </Box>
    </Container>
  );
};
