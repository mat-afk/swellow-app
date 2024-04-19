import { useEffect, useState } from "react";
import { conversationStore } from "../zustand/conversationStore";
import toast from "react-hot-toast";

const useConversation = () => {
  const [loading, setLoading] = useState();

  const { messages, setMessages, selectedConversation } = conversationStore();
  const contactId = selectedConversation?._id;

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${contactId}`);

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (contactId) getMessages();
  }, [contactId, setMessages]);

  return { loading, messages };
};

export default useConversation;
