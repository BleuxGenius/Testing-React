import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters'
import {getData as mockGetData} from '../api'

jest.mock('../api');

// test for fake data
const data = {
    next: 'placeholder',
    previous: null,
    results: [{
        name: 'Luke',
        height: '172',
    },
{
   name: 'Dark Vader',
   height: '85' 
},
{
    name: 'Leai',
    height: '60'
}]
}

test('renders', async () => {
    mockGetData.mockResolvedValue(data); 
    // AAA Arrange, Act, Assert

        const { getByText } = render(<StarWarsCharacters/>);
        const nextButton = getByText(/next/i);
        const previousButton = getByText(/previous/i);

        fireEvent.click(nextButton);
        fireEvent.click(previousButton);



        await wait(() => expect(getByText(/Luke/i)))
        getByText("Luke");

        expect(mockGetData).toHaveBeenCalledTimes(1);
})