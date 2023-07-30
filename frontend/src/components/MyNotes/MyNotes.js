import React, { useState } from "react";
import MainScreen from "../../common/MainScreen";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { notes } from "../../data/notes";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./MyNotes.module.css";

const MyNotes = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <MainScreen title={"Welcome back Harshita Gupta..."}>
      <Link to="createnote">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#158CBA",
            marginLeft: 10,
            marginBottom: 20,
          }}
          className={styles.createNewNoteBtn}
          size="large"
        >
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion
          expanded={expanded === note._id}
          onChange={handleChange(note._id)}
          style={{ marginBottom: 10 }}
        >
          <AccordionSummary
            aria-controls={`${note._id}d-content`}
            id={`${note._id}d-header`}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F4F4F4",
            }}
          >
            <Typography style={{ flex: 1 }}>{note.title}</Typography>
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              style={{
                marginRight: "10px",
                textTransform: "none",
                backgraoundColor: "#158CBA",
              }}
            >
              Edit
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              color="error"
              variant="contained"
              style={{ textTransform: "none" }}
            >
              Delete
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Badge
                badgeContent={`Category - ${note.category}`}
                color="success"
                className={styles.badge}
              />
            </Box>
            <Typography>{note.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
