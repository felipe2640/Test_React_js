import { describe, expect, it, Mock, vi } from "vitest"
import {fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginScreen from "./LoginScreen";



const handleClick = vi.fn()

const setFetchReturnData = (data: any) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  ) as Mock
};

describe("Login Screen test", ()=>{  
  beforeAll(() => {
    setFetchReturnData({authorId: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda'})
  })
  it("It should render", () => {
    render(<LoginScreen onSignIn={handleClick}  />);
  });
  it("It should render input", ()=>{
    render(<LoginScreen onSignIn={handleClick}  />);
    screen.getByLabelText(/senha/i)
    screen.getByLabelText(/usuário/i)
  })
  it("It should render Button", async () => {
    render(<LoginScreen onSignIn={handleClick}  />);

    const entrar = screen.getByText(/sign-in/i);
    fireEvent.click(entrar);
  });
  
  
})

