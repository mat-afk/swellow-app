import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useSocketContext } from "../context/SocketContext";
import { conversationStore } from "../zustand/conversationStore";
import notificationSound from "../assets/sounds/notification.mp3";

const useConversation = () => {
  const [loading, setLoading] = useState();

  const { socket } = useSocketContext();

  const { messages, setMessages, selectedConversation } = conversationStore();
  const contactId = selectedConversation?._id;

  useEffect(() => {
    const listenToNewMessages = () => {
      socket?.on("newMessage", (newMessage) => {
        newMessage.shouldShake = true;

        const sound = new Audio(notificationSound);
        sound.play();

        setMessages([...messages, newMessage]);
      });

      return () => socket?.off("newMessage");
    };

    listenToNewMessages();
  }, [socket, messages, setMessages]);

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

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/messages/send/${contactId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, messages, sendMessage };
};

export default useConversation;
