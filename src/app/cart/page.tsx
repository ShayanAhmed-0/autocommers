import React from 'react'
import { QueryResult } from '@vercel/postgres';
import { NextRequest,NextResponse } from 'next/server'; 
// import {db,cartTable} from "../../../lib/drizzle"
import { sql } from '@vercel/postgres';
import {v4 as uuid} from "uuid"
import { cookies } from "next/headers"

const getCart=async()=>{
    const res = await fetch("/api/cart",{
        method:"GET",

    })
    const result = await res.json()
    return result;
}

const page = () => {

const user_id:any=cookies().get("user_id")


  return (
    <div>
      {user_id.value}
    </div>
  )
}

export default page
