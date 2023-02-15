import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react'
import Accordion from './Accordeon.test';

describe("Accordion", ()=>{
    beforeEach(()=>{
        render(<Accordion  title="Testing"><h4>Someday</h4></Accordion>)
    });
    

    test("Deberia mostrar el titulo todo el tiempo", ()=>{
        expect(screen.getByText(/Testing/i)).toBeDefined();        
    })

    test("No Deberia mostrar el contenido al inicio", ()=>{
        expect(screen.getByText(/Content/i)).toBeUndefined()
    })
    

})

describe("Accordion Test",()=>{
    test("Deberia mostrar el titulo ", ()=>{
        render(<Accordion title="Jesusu"><h4>Content</h4> </Accordion>)
        expect(screen.getByText(/Content/i)).toBeDefined()
        expect(screen.getByText(/Jesusu/i)).toBeDefined()
    })
})