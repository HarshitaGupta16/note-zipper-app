import React from 'react';
import styles from './LoginPage.module.css'
import { Box, Button, Container, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <div className={styles.main}>
      <Container>
        <Box className={styles["intro-text"]}>
            <Typography component="h1" className={styles.heading}>Welcome to Simply Notes</Typography>
            <Typography component="p" className={styles.tagline}>One safe place for all your notes</Typography>
        </Box>
        <div className={styles.buttonContainer}>
            <Button variant='contained' className={styles.loginBtn}>Login</Button>
            <Button variant='outlined' className={styles.signUpBtn}>Sign Up</Button>
        </div>
      </Container>
    </div>
  );
}

export default LoginPage;
