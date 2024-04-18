import useContacts from "../../hooks/useContacts";
import Contact from "./Contact";
import { getRandomEmoji } from "../../utils/emojis";

const ContactsList = () => {
  const { loading, contacts } = useContacts();

  return (
    <div className="py-3 flex flex-col overflow-auto">
      {contacts.map((contact, index) => (
        <Contact
          key={contact._id}
          contact={contact}
          emoji={getRandomEmoji()}
          isLastIndex={index === contacts.length - 1}
        />
      ))}

      {loading && <span className="loading loading-spinner mx-auto"></span>}
    </div>
  );
};

export default ContactsList;
