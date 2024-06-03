import React, { useState } from "react";
import TextField from "@mui/material/TextField";

// function for saving phone number
export const TextInput = ({ onSave }) => {
    // on save is passed in, called a prop (properties)
    const [text, setText] = useState("");

    const handleSave = () => {
        onSave(text);
    };
};
return (
    <div>
        <TextField
            label="Phone Number"
            onChange={(e) => setText(e.target.value)}
        />
    </div>
    // <button onClick = {handleSaveToCsv}/>
);

// export
