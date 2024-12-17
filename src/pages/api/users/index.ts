import {PrismaClient} from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()



//MAIN REQUEST HANDLER FUNCTION

export default async function handle(req: NextApiRequest, res: NextApiResponse ) {
  switch(req.method){
    case "POST":
      await handlerPost(req,res)
      break;

    case "GET": 
     await handleGET(req, res)
     break;
  }
}




//CREATE USERS

 async function handlerPost(req: NextApiRequest, res:NextApiResponse){
  
  const {firstName, lastName, emailAddress} = req.body
  if(!firstName || !emailAddress){
    return res.status(400).json({"message": "enter a valid input"})
  }
  try {
    const users =  await prisma.user.create({
      data:{
        firstName,
        lastName,
        emailAddress
      }
    })
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  } 
}




//GET USERS
async function handleGET(req:NextApiRequest, res: NextApiResponse){
    
  try {
    const users = await prisma.user.findMany()
    
    if(!users){
      return res.status(400).json({"message":"cant find users"})
    }else{
      return res.status(200).json(users)
    }
  
  } catch (error) {
    console.error(error)
  }

  
}

