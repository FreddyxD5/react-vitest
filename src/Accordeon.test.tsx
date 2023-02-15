import React, { useState } from "react";

type AccordionProps = {
    title:string;
    children: React.ReactNode
}

const Accordion = (props: AccordionProps)=>{
    const {title, children} = props;
    const [show, setShow] = useState(false)

    const onAccordionClick = () =>{
        setShow(!show)
    }

    return (
        <div className="accordion">
            <h3 className="accordion-title">{title}</h3>
            <button onClick={()=> onAccordionClick()}>{!show ? 'Show':'Hide'}</button>            
            <div className="accordion content">
                {show && (
                    <div>
                        {children}
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Accordion;