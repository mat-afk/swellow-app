import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { conversationStore } from "../zustand/conversationStore";
import { getRandomEmoji } from "../utils/emojis";

const useContacts = () => {
  const [loading, setLoading] = useState(false);

  const { contacts, setContacts } = conversationStore();

  useEffect(() => {
    const getContacts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users/");

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        data.map((item) => {
          item.emoji = getRandomEmoji();
          item.display = "";
        });

        setContacts(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  return { loading, contacts, setContacts };
};

export default useContacts;
