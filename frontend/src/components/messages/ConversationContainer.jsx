import { useEffect } from "react";
import { conversationStore } from "../../zustand/conversationStore";
import Conversation from "./Conversation";
import ConversationHeader from "./ConversationHeader";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const ConversationContainer = () => {
  const { selectedConversation, setSelectedConversation } = conversationStore();

  useEffect(() => {
    // clean up
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] max-w-md flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <ConversationHeader to={selectedConversation.fullName} />
          <Conversation />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default ConversationContainer;
