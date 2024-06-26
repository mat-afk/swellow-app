import ConversationContainer from "../../components/messages/ConversationContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-zinc-100">
      <Sidebar />
      <ConversationContainer />
    </div>
  );
};

export default Home;
