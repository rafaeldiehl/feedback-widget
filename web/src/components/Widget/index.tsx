import { ChatTeardropDots } from 'phosphor-react'

import './style.css';

export function Widget() {
  return (
    <div className="widget-container">
      <button className="widget-button">
        <ChatTeardropDots className="chat-icon"/>
      </button>
    </div>
  )
}