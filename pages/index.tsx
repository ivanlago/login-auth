//import styles from '@/styles/Home.module.css'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>     
        <div>
          <img style={{borderRadius: '50px'}} src={session?.user?.image} /> {" "}
          Signed in as {session?.user?.name} 
        </div> 
        <br /> <hr />  <br />
        <div>
          <button onClick={() => signOut()}>Sign out</button>
        </div>        
      </div>
    )
  }
  return (
    <div className='center'>
      Not signed in <br /> <br /> <hr /> <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
