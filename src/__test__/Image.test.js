import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../components/Image';

describe('Image Component', () => {
  it('renders the image correctly', () => {
    // Mock props
    const url = 'https://example.com/image.jpg';
    const title = 'Example Image';

    render(<Image url={url} title={title} />);

    // Verificar que se renderiza la imagen con el atributo src y alt correctos
    const imgElement = screen.getByAltText(title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', url);
  });
});
