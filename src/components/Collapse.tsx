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
                <li >
          <Collapsible>
  <CollapsibleTrigger>{heading}</CollapsibleTrigger>
  <CollapsibleContent>
  <ul className="pl-4 text-white">
    {
      elements.map((items:any)=>(
        <Link href={`/Category/${items}`}>
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
