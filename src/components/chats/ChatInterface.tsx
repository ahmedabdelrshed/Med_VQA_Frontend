import QuestionInput from "./QuestionInput"
import WelcomeMessage from "./WelcomeMessage"

const ChatInterface = () => {
  return (
      <div className="h-screen relative">
          <WelcomeMessage />
          <QuestionInput />
    </div>
  )
}

export default ChatInterface