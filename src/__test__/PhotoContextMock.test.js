import React from "react";
import { render, fireEvent } from "@testing-library/react";
import axios from "axios";
import { PhotoContext } from "../context/PhotoContext";

jest.mock("axios");

describe("PhotoContextProvider", () => {
  it("should fetch and set images on runSearch", async () => {
    const mockImages = [
      { id: 1, url: "https://example.com/image1.jpg" },
      { id: 2, url: "https://example.com/image2.jpg" },
      { id: 3, url: "https://example.com/image3.jpg" }
    ];
    const mockLoading = false;
    const mockRunSearch = jest.fn();

    // Configurar el mock de axios para que devuelva los datos simulados
    axios.get.mockResolvedValue({
      data: {
        photos: {
          photo: mockImages,
        },
      },
    });

    // Renderizar el componente con el contexto de fotos
    const { getByText, getByTestId } = render(
      <PhotoContext.Provider value={{ images: mockImages, loading: mockLoading, runSearch: mockRunSearch }}>
        <div>
          <button onClick={async () => {
            fireEvent.click(getByText("Run Search")); // Hacer clic en el botón "Run Search"
            await new Promise(resolve => setTimeout(resolve, 100)); // Esperar un tiempo antes de la verificación
            const imagesLoadedElement = getByTestId("images-loaded");
            expect(imagesLoadedElement).toBeInTheDocument(); // Verificar que el elemento de imágenes cargadas esté presente
          }}>Run Search</button>
        </div>
      </PhotoContext.Provider>
    );

    // Ejecutar la función de búsqueda simulada
    mockRunSearch();

    // Esperar hasta que las imágenes se hayan cargado
    await new Promise(resolve => setTimeout(resolve, 1000)); // Esperar un tiempo suficiente para la carga de imágenes

    // Verificar que las imágenes se hayan establecido correctamente en el estado
    mockImages.forEach((image) => {
      expect(getByText(`Image ${image.id}`)).toBeInTheDocument();
    });
  });
});
