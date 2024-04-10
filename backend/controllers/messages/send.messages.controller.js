import Conversation from "../../models/conversation.model.js";
import Message from "../../models/message.model.js";

const sendMessage = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { id: receiverId } = req.params;
    const { message } = req.body;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // Socket.io

    await conversation.save();

    return res.status(201).json(newMessage)
  } catch (error) {
    console.error("Error in sendMessage controller: " + error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default sendMessage;
