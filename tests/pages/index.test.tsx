import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home featuredItems={[]} reviews={[]} />);

    const heading = screen.getByText("Coming Soon");

    expect(heading).toBeInTheDocument();
  });
});
