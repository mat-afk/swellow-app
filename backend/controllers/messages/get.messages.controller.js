import Conversation from "../../models/conversation.model.js";

const getMessages = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages"); // Not references, but the messages itself

    if (!conversation) {
      return res.status(200).json([]);
    }

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessages controller: " + error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getMessages;
