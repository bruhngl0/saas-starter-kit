
'use client'

import Image from "next/image";
import SignIn from "./components/signin/page";
import SignUp from "./components/signup/page";
import { useEffect, useState } from "react";


type User = {
  firstName: String,
  lastName: String,
  emailAddress: String
}

export default function Home() {

  const[users, setUsers] = useState<User[]>([])
  


  useEffect(()=>{
     fetchusers()
  },[])




  async function fetchusers(){
    try {
      const res = await fetch("/api/users")
      if(!res.ok){
        throw new Error("failed to get users")
      }

      const data = await res.json()
      const {} = data
      console.log(data)
      setUsers(data)


    } catch (error) {
      console.error(error)
    }
    
  }




  return (
     <div>
       {users.map((user,i)=> <li key={i}> {user.firstName}</li>)}
     </div>
  );
}
