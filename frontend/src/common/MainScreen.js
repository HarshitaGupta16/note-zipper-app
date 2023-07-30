import { Container } from "@mui/material";
import React from "react";
import styles from "./MainScreen.module.css";

const MainScreen = ({ title, children }) => {
  return (
    <div className={styles["main-background"]}>
      <Container>
        <div className={styles.page}>
          {title && (
            <>
              <h1 className={styles.heading}>{title}</h1>
              <hr />
            </>
          )}
          {children}
        </div>
      </Container>
    </div>
  );
};

export default MainScreen;
