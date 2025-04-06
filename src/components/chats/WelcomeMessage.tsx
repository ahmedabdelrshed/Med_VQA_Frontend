import { useAppSelector } from "../../store/hooks"

const WelcomeMessage = () => {
    const {user} =useAppSelector((state)=> state.auth)
  return (
      <div className="w-full h-screen text-5xl  flex justify-center pt-40 text-center ">
        <span className="text-gradient-hello">Hello,</span>
      <span className="text-gradient-name">{user.firstName}</span>    
      </div>
  )
}

export default WelcomeMessage