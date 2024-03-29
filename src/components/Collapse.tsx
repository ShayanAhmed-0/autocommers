import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import Link from 'next/link'

const Collapse = ({elements,heading}:{elements:string[],heading:string}) => {
  return (
    <div>
                <li>
          <Collapsible >
  <CollapsibleTrigger >{heading}</CollapsibleTrigger>
  <CollapsibleContent>
  <ul className="pt-2 pl-8 text-white">
    {
      elements.map((items:any)=>(
        <Link key={items} href={`/Category/${items}`}>
        <li className="list-disc" key={items}>
          {items}
        </li>
    </Link>
      ))
    }
  </ul>
  </CollapsibleContent>
</Collapsible>
            </li>
    </div>
  )
}

export default Collapse
