import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "../components/Form";

describe("Form component", () => {
  // Mock handleSubmit and history functions
  const handleSubmit = jest.fn(e => e.preventDefault());
  const history = { push: jest.fn() };

  it("renders the search input correctly", () => {
    const { getByPlaceholderText } = render(
      <Form handleSubmit={handleSubmit} history={history} />
    );

    const searchInput = getByPlaceholderText("Search...");
    expect(searchInput).toBeInTheDocument();
  });

  it("updates the search input value correctly", () => {
    const { getByPlaceholderText } = render(
      <Form handleSubmit={handleSubmit} history={history} />
    );

    const searchInput = getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "example" } });

    expect(searchInput.value).toBe("example");
  });

  it("calls handleSubmit when the form is submitted", () => {
    const { getByPlaceholderText, getByRole } = render(
      <Form handleSubmit={handleSubmit} history={history} />
    );

    const searchInput = getByPlaceholderText("Search...");
    const submitButton = getByRole("button", { type: "submit" });

    fireEvent.change(searchInput, { target: { value: "example" } });
    handleSubmit.mockClear(); // Limpiar llamadas anteriores a handleSubmit

    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(
      expect.any(Object),
      history,
      "example"
    );
  });
});
