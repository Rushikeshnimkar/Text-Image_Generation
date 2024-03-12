// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import Header from "../components/Header";

// function ChatGPTStyleComponent() {
//   const [inputValue, setInputValue] = useState('');
//   const [conversation, setConversation] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
  
//   const endOfMessagesRef = useRef(null);
  
//   const scrollToBottom = () => {
//     endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
  
//   useEffect(() => {
//     scrollToBottom();
//   }, [conversation]);
  
//   const handleCopyToClipboard = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       alert("Text copied to clipboard");
//     }).catch(err => {
//       console.error('Could not copy text: ', err);
//     });
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const userMessage = { type: 'user', text: inputValue };
//     setConversation((conv) => [...conv, userMessage]);
    
//     try {
//       const response = await axios.post('http://localhost:8001', { prompt: inputValue });
//       const responseData = JSON.parse(response.data.response);
//       const content = responseData.choices[0].message.content;
//       const botMessage = { type: 'bot', text: content };
//       setConversation((conv) => [...conv, botMessage]);
//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage = { type: 'error', text: 'Something went wrong. Please try again later.' };
//       setConversation((conv) => [...conv, errorMessage]);
//     } finally {
//       setIsLoading(false);
//       setInputValue('');
//     }
//   };

//   return (
//     <>
//       <Header/>
//       <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between pt-4 pb-4">
//         <div className="overflow-auto p-4" style={{ maxHeight: '80vh' }}>
//           <h1 className="text-xl font-bold mb-4">ChatGPT Style Chat</h1>
//           <div className="space-y-2">
//             {conversation.map((message, index) =>
//               <div key={index} className={`p-2 pt-4 pb-4 rounded-lg max-w-3xl ${message.type === 'user' ? 'self-end bg-blue-500' : message.type === 'bot' ? 'self-start bg-green-500 relative' : 'bg-red-500'}`} style={{ overflow: 'auto', whiteSpace: 'pre-wrap' }}>
//                 {message.type === 'bot' &&
//                   <button 
//                     onClick={() => handleCopyToClipboard(message.text)} 
//                     className="absolute top-1 right-1 text-xs text-white bg-gray-600 hover:bg-gray-700 p-1 rounded">
//                       Copy
//                   </button>
//                 }
//                 {message.text}
//               </div>
//             )}
//             {isLoading && (
//               <div className="flex justify-center items-center">
//                 <div className="typing-indicator">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </div>
//               </div>
//             )}
//             <div ref={endOfMessagesRef} />
//           </div>
//         </div>
//         <form onSubmit={handleSubmit} className="bg-gray-800 p-4 shadow-lg flex items-center">
//           <textarea
//             className="border border-gray-600 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
//             rows="3"
//             placeholder="Type your message..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//           <button
//             className="ml-2 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
//             type="submit"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }





// export default ChatGPTStyleComponent;
// -----------------------------------------------------------------------------
// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import Header from "../components/Header";

// function ChatGPTStyleComponent() {
//   const [inputValue, setInputValue] = useState('');
//   const [conversation, setConversation] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
  
//   const endOfMessagesRef = useRef(null);
  
//   const scrollToBottom = () => {
//     endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
  
//   useEffect(() => {
//     scrollToBottom();
//   }, [conversation]);
  
//   const handleCopyToClipboard = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       alert("Text copied to clipboard!");
//     }).catch(err => {
//       console.error('Could not copy text: ', err);
//     });
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const userMessage = { type: 'user', text: inputValue };
//     setConversation((conv) => [...conv, userMessage]);

//     try {
//       // Assuming the API returns a properly formatted JSON response directly
//       const response = await axios.post('http://localhost:8001', { prompt: inputValue });
      
//       // Directly using the data without JSON.parse
//       const content = response.data.choices[0].message.content;
      
//       const botMessage = { type: 'bot', text: content };
//       setConversation((conv) => [...conv, botMessage]);
//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage = { type: 'error', text: 'Something went wrong. Please try again later.' };
//       setConversation((conv) => [...conv, errorMessage]);
//     } finally {
//       setInputValue('');
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between pt-4 pb-4">
//         <div className="overflow-auto p-4" style={{ maxHeight: '80vh' }}>
//           <h1 className="text-xl font-bold mb-4">ChatGPT Style Chat</h1>
//           <div className="space-y-2">
//             {conversation.map((message, index) =>
//               <div key={index} className={`p-2 pt-4 pb-4 rounded-lg max-w-3xl ${message.type === 'user' ? 'self-end bg-blue-500' : message.type === 'bot' ? 'self-start bg-green-500 relative' : 'bg-red-500'}`} style={{ overflow: 'auto', whiteSpace: 'pre-wrap' }}>
//                 {message.type === 'bot' &&
//                   <button 
//                     onClick={() => handleCopyToClipboard(message.text)}
//                     className="absolute top-1 right-1 text-xs text-white bg-gray-600 hover:bg-gray-700 p-1 rounded">
//                       Copy
//                   </button>
//                 }
//                 {message.text}
//               </div>
//             )}
//             {isLoading && (
//               <div className="flex justify-center items-center">
//                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
//               </div>
//             )}
//             <div ref={endOfMessagesRef} />
//           </div>
//         </div>
//         <form onSubmit={handleSubmit} className="bg-gray-800 p-4 shadow-lg flex items-center">
//           <textarea
//             className="border border-gray-600 bg-white rounded-md py-2 px-3 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             rows="3"
//             placeholder="Type your message..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//           <button
//             className="ml-2 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
//             type="submit"
//             disabled={isLoading}
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default ChatGPTStyleComponent;
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from "../components/Header";

function ChatGPTStyleComponent() {
  const [inputValue, setInputValue] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard");
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const userMessage = { type: 'user', text: inputValue };
    setConversation((conv) => [...conv, userMessage]);

    try {
      const response = await axios.post('http://localhost:8001', { prompt: inputValue });
      const responseData = JSON.parse(response.data.response);
      const content = responseData.choices[0].message.content;
      const botMessage = { type: 'bot', text: content };
      setConversation((conv) => [...conv, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { type: 'error', text: 'Something went wrong. Please try again later.' };
      setConversation((conv) => [...conv, errorMessage]);
    } finally {
      setIsLoading(false);
      setInputValue('');
    }
  };

  return (
    <>
      
      <div className="h-screen bg-gray-900 text-white flex flex-col justify-between ">
      <Header />
        <div className="overflow-auto p-4" style={{ maxHeight: '80vh' }}>
          <h1 className="text-xl font-bold  flex justify-center "> welcome to Lazarus AI</h1>
          <div className="space-y-2">
            {conversation.map((message, index) =>
              <div key={index} className={`p-2 pt-8 pb-8 rounded-lg max-w-3xl ${message.type === 'user' ? 'self-end bg-blue-500' : message.type === 'bot' ? 'self-start bg-green-500 relative' : 'bg-red-500'} chat-message`} style={{ overflow: 'auto', whiteSpace: 'pre-wrap' }}>
                {message.type === 'bot' &&
                  <button
                    onClick={() => handleCopyToClipboard(message.text)}
                    className="absolute top-2 right-2 text-xs text-white bg-gray-600 hover:bg-gray-700 p-1 rounded">
                    Copy
                  </button>
                }
                {message.text}
              </div>
            )}
            {isLoading && (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-4 shadow-lg flex items-center">
          <textarea
            className="border border-gray-600 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
            rows="3"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="ml-2 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default ChatGPTStyleComponent;










