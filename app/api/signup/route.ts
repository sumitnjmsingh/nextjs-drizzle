import bcrypt from 'bcrypt';
import {db} from "../../../lib/db";
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;


    
    if (!name || !email || !password) {
      return new NextResponse('Please fill all the fields!', { status: 400 });
    }


    const existingUser=await db.user.findUnique({
        where:{
           email:email
        }
     });
     if(existingUser){
        return NextResponse.json({user:null,message:"User already exists"},{status:409});
     }

    
    const hashedPassword = await bcrypt.hash(password, 12);



    
    const newuser = await db.user.create({
      data: {
        name,
        email,
        password:hashedPassword,
      },
    });


    
    return NextResponse.json({user:newuser,message:"User created successfully"},{status:201});

  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}