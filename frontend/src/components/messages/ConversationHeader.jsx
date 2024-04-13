const ConversationHeader = ({ to }) => {
  return (
    <div className="bg-yellow-400 px-4 py-2 mb-2">
      <span className="label-text">To:</span>{" "}
      <span className="text-zinc-900 font-bold">{to}</span>
    </div>
  );
};

export default ConversationHeader;
