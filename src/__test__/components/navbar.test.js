import React from 'react';
import { NavBar } from './../../frontend/components/theme/navbar/navbar';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('<Navbar />', () => {

    test('Render del componente <NavBar />', () => {
        const navbar = shallow(<NavBar />);
        expect(navbar.length).toEqual(1);
    });

    test('Comprobando renderizado del Logo en <NavBar />', () => {
        const navbar = mount(<MemoryRouter initialEntries={['/']}><NavBar /></MemoryRouter>);
        expect(navbar.find('img').length).toEqual(1);
    });

    test('Comprobando prop alt del Logo', () => {
        const navbar = mount(<MemoryRouter initialEntries={['/']}><NavBar /></MemoryRouter>);
        expect(navbar.find('img').props().alt).toEqual('soymichel');
    });

});