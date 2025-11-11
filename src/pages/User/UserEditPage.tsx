import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button, Avatar } from "@mui/material";

export const UserEditPage: React.FC = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("1234567890");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    // Aici faci API call pentru a salva datele
    console.log({ name, email, phone, password, image });
    alert("Account updated (mock)");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3}>Account Settings</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src={image || ""} sx={{ width: 80, height: 80 }} />
          <Button variant="outlined" component="label">
            Upload Image
            <input hidden type="file" accept="image/*" onChange={handleImageChange} />
          </Button>
        </Box>
        <TextField label="Name" value={name} onChange={e => setName(e.target.value)} fullWidth />
        <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} fullWidth />
        <TextField label="Phone" value={phone} onChange={e => setPhone(e.target.value)} fullWidth />
        <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} fullWidth />
        <TextField label="Confirm Password" type="password" value={password} onChange={e => setPassword(e.target.value)} fullWidth />
        <Button variant="contained" color="primary" onClick={handleSave}>Save Changes</Button>
      </Box>
    </Container>
  );
};