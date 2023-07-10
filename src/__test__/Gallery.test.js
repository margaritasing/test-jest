import React from 'react';
import { render } from '@testing-library/react';

import Gallery from '../components/Gallery';


describe('Gallery Component', () => {
  it('renders NoImages component when no images are fetched', () => {
    const props = {
      data: [],
    };
    const { getByText } = render(<Gallery {...props} />);
    const noImagesComponent = getByText('No Images Found');
    expect(noImagesComponent).toBeInTheDocument();
  });

  it('renders Image components when images are fetched', () => {
    const props = {
      data: [
        {
          farm: 1,
          server: 'server1',
          id: 'id1',
          secret: 'secret1',
          title: 'Image 1',
        },
        {
          farm: 2,
          server: 'server2',
          id: 'id2',
          secret: 'secret2',
          title: 'Image 2',
        },
      ],
    };
    const { getAllByRole } = render(<Gallery {...props} />);
    const imageComponents = getAllByRole('img');
    expect(imageComponents).toHaveLength(2);
  });
});
