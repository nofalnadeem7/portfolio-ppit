import React from "react";
import { Modal, Tag } from "antd";
import { CloseOutlined } from "@ant-design/icons"; // IMPORTANT: Ensure this is imported

const MemberModal = ({ visible, member, onClose }) => {
  if (!member) return null;

  return (
    <Modal
      // Set the class names for custom CSS targeting (defined in your global CSS)
      classNames={{
        header: 'ant-modal-no-header', 
        close: 'member-modal-close-icon',
      }}
      
      // Customize the close icon appearance (size and color)
      closeIcon={
        <CloseOutlined style={{ color: 'white', fontSize: '24px' }} />
      }
      
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={700}
      bodyStyle={{
        background: "linear-gradient(145deg, #0a0014, #1a0033)",
        borderRadius: "16px",
        color: "white",
        padding: "40px",
      }}
    >
      <div className="text-center">
        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-purple-500 shadow-lg"
        />
        <h2 className="text-3xl font-bold mt-4 text-purple-300">{member.name}</h2>
        <p className="text-gray-400 text-lg mt-2">{member.role}</p>

        <p className="text-gray-300 mt-4 text-base leading-relaxed max-w-xl mx-auto">
          {member.experience}
        </p>

        <div className="mt-6 flex flex-wrap justify-center">
          {member.skills.map((skill) => (
            <Tag
              key={skill}
              color="purple"
              className="m-2 text-base px-4 py-1 rounded-full"
            >
              {skill}
            </Tag>
          ))}
        </div>

        <div className="mt-6 space-x-6">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-purple-300 text-lg font-semibold"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default MemberModal;