import {describe, expect, test} from 'vitest';
import {fireEvent, waitFor, render, screen} from '@testing-library/react'
import "@testing-library/jest-dom"

import { act } from '@testing-library/react';

import Accordion from './Accordeon.test';

describe("Accordion", ()=>{
    beforeEach(()=>{
        render(<Accordion  title="Jesusu"><h4>Holitas</h4></Accordion>)
    });
    

    test("Deberia mostrar el titulo todo el tiempo", ()=>{
        expect(screen.getByText(/Jesusu/i)).toBeInTheDocument();        
    })

    test("No Deberia mostrar el contenido al inicio", ()=>{
        expect(screen.queryByText(/Holitas/i)).not.toBeInTheDocument()
    })
    
    test("Deberia mostrar el contenido de la funcion acordion click", async()=>{
        const title = screen.getByText(/Show/i);
        fireEvent.click(title)
        expect( await screen.findByText(/Holitas/i)).toBeInTheDocument();
    })

})

describe("Accordion Test",()=>{
    test("Deberia mostrar el titulo ", ()=>{
        render(<Accordion title="Jesusu"><h4>Content</h4> </Accordion>)        
        expect(screen.getByText(/Show/i)).toBeDefined()
        expect(screen.getByText(/Jesusu/i)).toBeDefined()
    })
})