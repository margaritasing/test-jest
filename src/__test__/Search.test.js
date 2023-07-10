import React  from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { PhotoContext } from "../context/PhotoContext";
import Search from "../components/Search";

describe("Search Component", () => {
  test("renders the search term correctly", () => {
    const searchTerm = "Nature";

    const mockImages = [
      { id: 1, url: "https://example.com/image1.jpg" },
      { id: 2, url: "https://example.com/image2.jpg" },
      { id: 3, url: "https://example.com/image3.jpg" }
    ];
    const mockLoading = false;
    const mockRunSearch = jest.fn();

    const { getByText } = render(
      <Router>
        <PhotoContext.Provider value={{ images: mockImages, loading: mockLoading, runSearch: mockRunSearch }}>
          <Search searchTerm={searchTerm} />
        </PhotoContext.Provider>
      </Router>
    );
    const headingElement = getByText(`${searchTerm} Images`);

    expect(headingElement).toBeInTheDocument();
  });
});
