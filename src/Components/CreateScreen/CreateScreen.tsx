import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Button from "@mui/material/Button";
import { IUser, signUpEndpoint } from "../../Helpers/backend"

interface ILoginScreenProps {
  onSignIn: (user: IUser) => void;
}

function LoginScreen(props: ILoginScreenProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function signIn(evt: React.FormEvent) {
    evt.preventDefault();
    signUpEndpoint(username, password).then(props.onSignIn, (e) => {
      setError(
        "E-mail não encontrado ou senha incorreta."
      );
      console.error({ e });
    });
  }
  return (
    <form onSubmit={signIn}>
      <TextField
        autoFocus
        margin="normal"
        label="Usuário"
        type={"text"}
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
        fullWidth
        variant="outlined"
      />
      <TextField
        margin="normal"
        label="Senha"
        type="password"
        variant="outlined"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
        fullWidth
      />
      {error && (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      )}
      <Box sx={{ textAlign: "end", marginTop: 4, marginLeft: 3 }}>
        <Button type="submit" variant="contained">
          Criar usuário
        </Button>
      </Box>
    </form>
  );
}

export default LoginScreen;
