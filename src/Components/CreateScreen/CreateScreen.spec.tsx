import { describe, expect, it, vi } from "vitest"

import {BrowserRouter as Router} from 'react-router-dom';
import {fireEvent, render, screen } from '@testing-library/react';
import CreateScreen from "./CreateScreen";


const handleClick = vi.fn()

describe("Login Screen test", ()=>{  
  it("It should render", () => {
    render(<CreateScreen onSignIn={handleClick}  />);
  });
  it("It should render input", ()=>{
    render(<CreateScreen onSignIn={handleClick}  />);
    screen.getByLabelText(/senha/i)
    screen.getByLabelText(/usuário/i)
  })
  it("It should render Button", async () => {
    render(<CreateScreen onSignIn={handleClick}  />);

    const entrar = screen.getByText(/criar/i);
    fireEvent.click(entrar);
  });
})

