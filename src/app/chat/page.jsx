"use client";

import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";
import { getMessages } from "@/utils/api-chat";
import { useEffect, useState } from "react";

export default function ChatPage() {

  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");


  // Función asíncrona para obtener los mensajes del servidor
  async function fetchMessages() {
    try {
      const response = await getMessages();
      setMessages(response);
    } catch (error) {
      console.log("Error obteniendo mensajes (fetchMessages)", error);
    }
  }

  // Efecto para obtener el nombre de usuario del localStorage y cargar los mensajes inicialmente
  useEffect(() => {
    setUsername(localStorage.getItem("chatUsername"));
    fetchMessages();

    // Interval para actualizar los mensajes cada segundo
    const interval = setInterval(fetchMessages, 3000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-3 d-flex flex-column align-items-center">
      <h2 className="text-center mb-4 text-primary">Chat actual del usuario  <b>{username}</b></h2>
      <div className="card w-100" style={{ maxWidth: '600px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body" style={{ height: '400px', overflowY: 'auto', backgroundColor: '#f8f9fa' }}>
          <MessageList messages={messages} />
        </div>
        <div className="card-footer bg-white">
          <MessageForm onMessageSent={fetchMessages} />
        </div>
      </div>
    </div>
  );
  
}