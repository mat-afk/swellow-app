import useContacts from "../../hooks/useContacts";
import Contact from "./Contact";

const ContactsList = () => {
  const { loading, contacts } = useContacts();

  return (
    <div className="flex flex-col overflow-auto">
      {contacts.map((contact, index) => (
        <div key={contact._id} className={`${contact.display}`}>
          <Contact
            contact={contact}
            isLastIndex={index === contacts.length - 1}
          />
        </div>
      ))}

      {loading && <span className="loading loading-spinner mx-auto"></span>}
    </div>
  );
};

export default ContactsList;
