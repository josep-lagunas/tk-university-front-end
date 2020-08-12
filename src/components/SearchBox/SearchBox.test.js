import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBox from "./SearchBox";

const setupComponent = (props = {}) => {
    return render(<SearchBox {...props} />);
}

describe('<SeachBox/>', () => {
    it('Search prop method is invoked on search icon click', () => {

        const searchText = 'recipe name';
        const onSearch = jest.fn();

        const {getByTestId} = setupComponent({onSearch});
        fireEvent.change(getByTestId('search-text'), {
            target: {value: searchText}
        })
        fireEvent.click(getByTestId('search-button'))

        expect(onSearch).toHaveBeenCalledWith(searchText);
    });
    it('Search prop method is invoked when the form is submitted', async () => {

        const searchText = 'recipe name';
        const onSearch = jest.fn();

        const {getByTestId} = setupComponent({onSearch});
        const input = getByTestId('search-text')
        fireEvent.change(input, {
            target: {value: searchText}
        })
        fireEvent.submit(getByTestId('form-search'))

        expect(onSearch).toHaveBeenCalledWith(searchText);
    });
});