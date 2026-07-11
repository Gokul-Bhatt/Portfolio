import chatData from "./chatdata";

export const getBotReply = (message) => {
  const text = message.toLowerCase();

  for (const item of chatData) {
    if (item.keywords.some((keyword) => text.includes(keyword))) {
      return item.answer;
    }
  }

  return "Sorry, I only answer questions about Gokul.";
};