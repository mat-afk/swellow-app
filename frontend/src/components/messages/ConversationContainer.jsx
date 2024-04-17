import Conversation from "./Conversation";
import ConversationHeader from "./ConversationHeader";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const ConversationContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <ConversationHeader to="Luiz Quirino" />
          <Conversation />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default ConversationContainer;
