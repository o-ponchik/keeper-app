import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [typeIn, setTypeIn] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function showForm() {
    setTypeIn(true);
  }

  return (
    <div>
      <form className="create-note">
        {typeIn && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={typeIn ? "3" : "1"}
          value={note.content}
          onChange={handleChange}
          onClick={showForm}
        />
        <Zoom in={typeIn}>
          <Fab color="secondary" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
