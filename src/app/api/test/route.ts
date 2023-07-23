// import {NextRequest,NextResponse} from "next/server"
// import {db,cartTable} from "@/lib/drizzle"

// import { cookies } from "next/headers"
// import {eq} from "drizzle-orm"


// export const GET=async(request:NextRequest)=>{
// try {
//     const res = await db.select().from(cartTable)
//     return NextResponse.json({res})
// } catch (error) {
//     return NextResponse.json({message:"somethings wrong on cart get"})
// }
// }