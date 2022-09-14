import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { getFeeds, IUser } from "./Helpers/backend";
import { authContext } from "./Helpers/authContext";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import CreateScreen from "./Components/CreateScreen/CreateScreen";
import Feed from './Components/Feed/Feed';



function App() {
  const [data, setData] = useState<any>([]);
  const [user, setUser] = useState<IUser | null | void>(null);

  const [formScreen, SetFormScreen] = useState(true);

  function onSignOut() {
    SetFormScreen(true);
    setUser(null);
  }
  

  if (user) {
    return (
      <authContext.Provider value={{ user, onSignOut }}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Feed />}
            /> 
          </Routes>
        </Router>
      </authContext.Provider>
    );
  } else {
    return (
      <>
        <Container maxWidth="sm">
          <Typography variant="h3" component="div" margin={2}>
            Upvotes
          </Typography>
          
          <Typography variant="body1" margin={2}>
            {formScreen
              ? `Digite e-mail e senha para fazer Login .`
              : `Digite e-mail e senha para se cadastrar .`}{" "}
            <br />
            {formScreen ? `Caso não tenha usuário` : `Já tenho usuário`}
            <Button
              variant="text"
              onClick={() => {
                formScreen ? SetFormScreen(false) : SetFormScreen(true);
              }}
            >
              Clique aqui
            </Button>
          </Typography>
          {formScreen ? (
            <LoginScreen onSignIn={setUser} />
          ) : (
            <CreateScreen onSignIn={setUser} />
          )}
        </Container>
      </>
    );
  }
}

export default App
