import { fireEvent, getByPlaceholderText, render, screen } from "@testing-library/react"
import Login from "./login.component"

test("username input should be rendered", () => {
    render(<Login />);
    const inputItem = screen.getByPlaceholderText(/username/i);
    expect(inputItem).toBeInTheDocument();
});

test("password input should be rendered", () => {
    render(<Login />);
    const inputItem = screen.getByPlaceholderText(/password/i);
    expect(inputItem).toBeInTheDocument();
});

test("username input should be empty", () => {
    render(<Login />);
    const inputItem = screen.getByPlaceholderText(/username/i);
    expect(inputItem.value).toBe("");
});

test("password input should be empty", () => {
    render(<Login />);
    const inputItem = screen.getByPlaceholderText(/password/i);
    expect(inputItem.value).toBe("");
});


test("button should be disabled", () => {
    render(<Login />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
});

test("error message should be hidden", () => {
    render(<Login />);
    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).not.toBeVisible();
});

test("username is changeable", () => {
    render(<Login />);
    const inputItem = screen.getByPlaceholderText(/username/i);
    const newValue = "test";
    fireEvent.change(inputItem, {target: {value: newValue}});
    expect(inputItem.value).toBe(newValue);
});

test("password is changeable", () => {
    render(<Login />);
    const inputItem = screen.getByPlaceholderText(/password/i);
    const newValue = "test";
    fireEvent.change(inputItem, {target: {value: newValue}});
    expect(inputItem.value).toBe(newValue);
});

test("button is not disabled on username and password change", () => {
    render(<Login />);
    const button = screen.getByRole("button");
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const newValue = "test";
    fireEvent.change(usernameInput, {target: {value: newValue}});
    fireEvent.change(passwordInput, {target: {value: newValue}});
    expect(button).not.toBeDisabled();
});