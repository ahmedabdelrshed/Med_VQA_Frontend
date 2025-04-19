import { useParams } from "react-router";
import ChatInterface from "./ChatInterface";

const ChatWrapper = () => {
  const { id } = useParams();
  return <ChatInterface key={id} />;
};

export default ChatWrapper;
