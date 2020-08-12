import React from 'react';
import {render} from '@testing-library/react';
import Recipe from "./Recipe";
import '@testing-library/jest-dom/extend-expect'

const setupComponent = (props = {}) => {
    return render(<Recipe {...props} />);
}

describe('<Recipe>', () => {
    it('should contain the name of the recipe', () => {
        const {getByText} = setupComponent({
            recipe: {
                name: 'Test recipe name',
                description: 'Test recipe description',
                ingredients: [{name: 'test ingredient'}]
            }
        });
        expect(getByText('Test recipe name')).toBeInTheDocument();
    });

    it('should contain remove icon', () => {
        const {getByTestId} = setupComponent({
            recipe: {
                name: 'Test recipe name',
                description: 'Test recipe description',
                ingredients: [{name: 'test ingredient'}]
            }
        });
        expect(getByTestId('remove-icon')).toBeInTheDocument();
    });

    it('should invoke the proper parent method', () => {
        const removeMethod = jest.fn()
        const testId = 'dummy-id'
        const {getByTestId} = setupComponent({
            recipe: {
                id: testId,
                name: 'Test recipe name',
                description: 'Test recipe description',
                ingredients: [{name: 'test ingredient'}]
            },
            onremove: removeMethod
        });

        getByTestId('remove-icon').click()
        expect(removeMethod).toHaveBeenCalledWith(testId)
    });
});