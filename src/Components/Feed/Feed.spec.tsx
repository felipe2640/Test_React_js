import { describe, expect, it, Mock, vi } from "vitest"
import userEvent from '@testing-library/user-event'
import {fireEvent, render, screen, waitFor } from '@testing-library/react';
import Feed from "./Feed";


const setFetchReturnData = (data:any) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  ) as Mock
};

describe("General CoinList test", () => {
  beforeAll(() => {
    setFetchReturnData([
      
  {
    authorId: 0,
    content: "string"
  },
  {
    authorId: 0,
    content: "string2"
  },
      
    ]);
  });
  it("It should render", () => {
    render(<Feed/>);
  });

  it("It should render API data", async () => {
    render(<Feed />);

    await screen.findByText("string");
    await screen.findByText("string2");
  });

  // it("It should filter correctly", async () => {
  //   render(<Feed />);
  //   await screen.findByText("string");
  //   await screen.findByText("string2");

  //   const filter = screen.getByLabelText(/filter/i);
  //   fireEvent.change(filter, { target: { value: "string" } });

  //   screen.getByText("string");
    
  // });

});
