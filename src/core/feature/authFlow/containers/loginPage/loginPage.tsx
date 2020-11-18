import React, { ChangeEvent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './loginPage.module.scss';

export const LoginPage = (): JSX.Element => {
  const [values, setValues] = React.useState({
    login: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container className={styles.wrapper}>
      <Box className={styles.loginBox}>
        <Typography className={styles.tittle} variant="subtitle1">
          Login your account
        </Typography>
        <form noValidate autoComplete="off">
          <Box className={styles.inputGroup}>
            <FormControl className={styles.input}>
              <InputLabel htmlFor="loginInput">login</InputLabel>
              <Input onChange={handleChange} id="loginInput" name="login" />
            </FormControl>
            <FormControl className={styles.input}>
              <InputLabel htmlFor="passwordInput">password</InputLabel>
              <Input onChange={handleChange} id="passwordInput" className={styles.input} name="password" />
            </FormControl>
          </Box>
          <Button className={styles.loginButton} color="primary" variant="contained">
            Sign in
          </Button>
        </form>
      </Box>
    </Container>
  );
};
