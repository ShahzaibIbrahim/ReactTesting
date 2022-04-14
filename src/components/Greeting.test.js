import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("Renders Hello World Greeting", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // nothing

    // assert
    const linkElement = screen.getByText("hello world", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });

  test("Renders 'It's Good to see you'", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // nothing

    // assert
    const linkElement = screen.getByText("It's good to see you", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });

  test("Change Paragraph on Change Text Click", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);


    // assert
    const linkElement = screen.getByText("Changed", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });

  test("does not render 'Good to see you' on Change Text Click", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);


    // assert
    const linkElement = screen.queryByText("It's good to see you", { exact: false });
    expect(linkElement).toBeNull();
  });
});
