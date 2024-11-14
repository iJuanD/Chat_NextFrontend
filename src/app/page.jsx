"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LobbyChat() {
  
  const [username, setUsername] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.trim()) {
      localStorage.setItem("chatUsername", username);
      router.push("/chat");
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
  <div className="card p-4 shadow-sm" style={{ maxWidth: '450px', width: '100%' }}>
    <h1 className="text-center mb-4 text-primary">Chat with Django</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Ingrese el nombre del usuario"
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#4A628A' }}>Ingresar al Chat</button>
    </form>
  </div>
</div>

  );
}