import Contact from "./Contact";

const ContactsList = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
};

export default ContactsList;
