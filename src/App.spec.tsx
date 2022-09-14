import { describe, expect, it, Mock, vi } from "vitest"
import '@testing-library/jest-dom'
import {fireEvent, render, screen } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import App from "./App";
import { authContext } from "./Helpers/authContext";
import Feed from './Components/Feed/Feed';


const valueProvider =  {user:{authorId:'f79e82e8-c34a-4dc7-a49e-9fadc0979fda'} , onSignOut: ()=>{} }

describe("Login Screen test", ()=>{ 
  it("It should render", () => {
    render(<App/>);
  });
  it("render app to sign-in",async ()=>{
    render(<App/>);
    const login = await screen.queryByText(/Login/i)
    
    expect(login).toBeInTheDocument()
  })
  it("render app to sign-up",async ()=>{
    render(<App/>);
    const cadastrar = screen.getByText(/Clique aqui/i);
    fireEvent.click(cadastrar)
    
    expect(await screen.queryByText(/cadastrar/i)).toBeInTheDocument()
    
  })  
  it('provides expected AuthContext obj to child elements', async () => {
     render(
      <authContext.Provider value={valueProvider}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Feed />}
            /> 
          </Routes>
        </Router>
      </authContext.Provider>
     )
     expect(await screen.findByText(/feed/i)).toBeInTheDocument()
     expect(await screen.queryByText(/Login/i)).not.toBeInTheDocument();
     expect(await screen.queryByText(/cadastrar/i)).not.toBeInTheDocument();
    })        
     


})

