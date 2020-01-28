import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters'
import {getData as mockGetData} from '../api'

jest.mock('../api');

const data = {
    next: 'placeholder',
    previous: null,
    results: [{}]
}


test('renders', async () => {
    mockGetData.mockResolvedValue(); 
    // AAA Arrange, Act, Assert

        const { getByText } = render(<StarWarsCharacters/>);

        const nextButton = getByText(/next/i);
        const previousButton = getByText(/previous/i);

        fireEvent.click(nextButton);
        fireEvent.click(previousButton);

        


})