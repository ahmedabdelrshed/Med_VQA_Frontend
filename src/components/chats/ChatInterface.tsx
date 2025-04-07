import QuestionInput from "./QuestionInput"
import WelcomeMessage from "./WelcomeMessage"

const ChatInterface = () => {
  return (
      <div className="h-[80vh] lg:h-screen relative z-0">
          <WelcomeMessage />
          <QuestionInput />
    </div>
  )
}

export default ChatInterface