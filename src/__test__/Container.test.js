import React from "react";
import { render } from "@testing-library/react";
import { PhotoContext } from "../context/PhotoContext";
import Container from "../components/Container";

describe("Container Component", () => {
  test("renders Loader while loading is true", () => {
    const mockImages = [];
    const mockLoading = true;
    const mockRunSearch = jest.fn();

    const { getByTestId } = render(
      <PhotoContext.Provider value={{ images: mockImages, loading: mockLoading, runSearch: mockRunSearch }}>
        <Container searchTerm="" />
      </PhotoContext.Provider>
    );

    const loader = getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  test("renders Gallery after loading is false", () => {
    const mockImages = [{ id: 1, url: "image-url" }];
    const mockLoading = false;
    const mockRunSearch = jest.fn();

    const { getByTestId } = render(
      <PhotoContext.Provider value={{ images: mockImages, loading: mockLoading, runSearch: mockRunSearch }}>
        <Container searchTerm="" />
      </PhotoContext.Provider>
    );

    const gallery = getByTestId("gallery");
    expect(gallery).toBeInTheDocument();
  });
});
