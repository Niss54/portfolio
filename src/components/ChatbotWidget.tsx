import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{text: string, isBot: boolean}>>([
    { text: "Hi! 👋 I'm here to help. What would you like to know about Nishant's services?", isBot: true }
  ]);

  const quickQuestions = [
    "What services do you offer?",
    "How can I hire you?",
    "What's your availability?",
  ];

  const handleSendMessage = (text?: string) => {
    const messageToSend = text || message;
    if (!messageToSend.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: messageToSend, isBot: false }]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      let response = "";
      const lowerMessage = messageToSend.toLowerCase();
      
      if (lowerMessage.includes("service")) {
        response = "I offer Full-Stack Development, AI/ML Solutions, UI/UX Design, and Cloud Architecture services. Would you like to know more about any specific service?";
      } else if (lowerMessage.includes("hire") || lowerMessage.includes("contact")) {
        response = "You can reach me at Nishantma05@gmail.com or call/WhatsApp at +91 8840301998. I'm available for freelance projects and collaborations!";
      } else if (lowerMessage.includes("availab")) {
        response = "I'm currently available for new projects! Feel free to reach out and let's discuss your requirements.";
      } else {
        response = "Thanks for your message! For detailed information, please contact me at Nishantma05@gmail.com or +91 8840301998.";
      }
      
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 glass-strong rounded-2xl border-2 border-primary/30 shadow-[0_0_40px_hsl(189_100%_50%/0.3)] overflow-hidden z-50 animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Chat Assistant</h3>
                <p className="text-xs text-foreground/80">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-background/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 h-64 overflow-y-auto space-y-3 bg-background/30">
            {messages.map((msg, index) => (
              <div key={index} className={`flex gap-2 ${msg.isBot ? '' : 'flex-row-reverse'}`}>
                {msg.isBot && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-foreground" />
                  </div>
                )}
                <div className={`glass rounded-2xl ${msg.isBot ? 'rounded-tl-none' : 'rounded-tr-none bg-primary/20'} p-3 max-w-[80%]`}>
                  <p className="text-sm text-foreground">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground px-2">Quick questions:</p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="w-full text-left glass rounded-xl p-2 text-sm hover:bg-primary/10 hover:border-primary/30 border border-primary/10 transition-all"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-primary/20 bg-background/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-background/50 border border-primary/20 rounded-xl focus:outline-none focus:border-primary text-sm"
              />
              <button 
                onClick={() => handleSendMessage()}
                className="p-2 bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-[0_0_20px_hsl(189_100%_50%/0.5)] transition-all"
              >
                <Send className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_30px_hsl(189_100%_50%/0.5)] hover:shadow-[0_0_50px_hsl(189_100%_50%/0.7)] hover:scale-110 transition-all z-50 group"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
        <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-background animate-pulse" />
      </button>
    </>
  );
};

export default ChatbotWidget;
