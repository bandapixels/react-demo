import React, { useState, ChangeEvent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useDispatch } from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from 'react-router-dom';
import styles from '../../../../shared/authStyles/authStyles.module.scss';
import { LoginAct } from '../../authFlow.actions';

export const LoginPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (): void => {
    dispatch(new LoginAct(values));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container className={styles.wrapper}>
      <Box className={styles.box}>
        <Typography className={styles.tittle} variant="subtitle1">
          Login your account
        </Typography>
        <ValidatorForm onSubmit={handleSubmit}>
          <Box className={styles.inputGroup}>
            <TextValidator
              label="email"
              name="email"
              type="text"
              value={values.email}
              required
              onChange={handleChange}
              className={styles.input}
            />
            <TextValidator
              label="password"
              name="password"
              value={values.password}
              type="password"
              required
              onChange={handleChange}
              className={styles.input}
            />
          </Box>
          <ButtonGroup className={styles.buttonGroup}>
            <Button type="submit" className={styles.authButton} color="primary" variant="contained">
              Sign in
            </Button>
            <Link to="/registration" className={styles.authButton}>
              Registration
            </Link>
          </ButtonGroup>
        </ValidatorForm>
      </Box>
    </Container>
  );
};
