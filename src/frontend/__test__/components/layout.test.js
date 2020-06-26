import React from 'react';
import { shallow, mount, } from 'enzyme';
import { MemoryRouter, } from 'react-router-dom';
import { Layout } from './../../frontend/components/theme/layout';

describe('Testeando Layout.js', () => {

    test('Testeando el montado del componente <Layout />', () => {
        const layout = shallow(<MemoryRouter initialEntries={['/']}><Layout /></MemoryRouter>);
        expect(layout.length).toEqual(1);
    });

    test('Testeando la prop children <Layout>{children}</Layout>', () => {

        const layout = mount(
            <MemoryRouter initialEntries={['/']}>
                <Layout title='testeando layout'>
                    <div className='testing-layout-class'></div>
                </Layout>
            </MemoryRouter>
        );
        expect(layout.contains(<div className='testing-layout-class'></div>)).toEqual(true);
    });

});