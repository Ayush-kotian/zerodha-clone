import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';
describe('Hero Component', () => {
    test('renders Hero component', () => {
        render(<Hero/>);
        const heroImage=screen.getByAltText('homeHero');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src',expect.stringContaining("homeHero.png"))
    })
});