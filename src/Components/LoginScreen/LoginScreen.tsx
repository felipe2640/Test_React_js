import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Button from "@mui/material/Button";
import { IUser, signInEndpoint } from "../../Helpers/backend";


interface ILoginScreenProps {
  onSignIn: (user: IUser) => void;
}

function LoginScreen(props: ILoginScreenProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function signIn(evt: React.FormEvent) {
    evt.preventDefault();
    // console.log(email, password);
    
    signInEndpoint(username, password).then(props.onSignIn, (e) => {
      setError(
        "Usuário não encontrado ou senha incorreta."
      );
      console.error({ e });
    });
    
  }
  return (
    <form onSubmit={signIn}>
      
      <TextField
        autoFocus
        label="Usuário"
        margin="normal"
        type={"text"}
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
        fullWidth
        variant="outlined"
        // error={!!errors.desc}
        // helperText={errors.desc}
      />
      <TextField
        margin="normal"
        label="Senha"
        type="password"
        variant="outlined"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
        fullWidth
        // error={!!errors.desc}
        // helperText={errors.desc}
      />
      {error && (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      )}
      <Box sx={{ textAlign: "end", marginTop: 4, marginLeft: 3 }}>
        <Button type="submit" variant="contained">
          Sign-in
        </Button>
      </Box>
    </form>
  );
}

export default LoginScreen;
