// FriendsModal.js
import React from 'react';
import './css/FriendsModal.css'; 
import { useModal } from "src/components/hooks/use-modal";

const FriendsModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "friend";

  const modalStyle = {
    display: isModalOpen ? 'block' : 'none',
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>친구 초대</h2>
        <p>초대 메시지를 작성하세요.</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default FriendsModal;
