import React from "react";
import { Card } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const MemberCard = ({ member, onClick }) => {
  return (
    <Card
      hoverable
      onClick={() => onClick(member)}
      // Card itself already has text-center
      className="text-center shadow-lg hover:shadow-purple-600/50 transition-all duration-300 w-[320px] sm:w-[360px] rounded-2xl bg-gradient-to-br from-black via-purple-950 to-black border border-purple-800/50 overflow-hidden"
      cover={
        // MODIFIED: Simplified the wrapper for centering the image
        <div className="p-6 pt-8 pb-6 bg-gradient-to-b from-purple-950/30 to-transparent">
          <img
            alt={member.name}
            src={member.photoUrl}
            // 🔑 KEY FIX: Added 'block' and 'mx-auto' for guaranteed centering
            className="w-40 h-40 object-cover rounded-full border-4 border-purple-600 shadow-lg block mx-auto"
          />
        </div>
      }
    >
      <div className="pb-4">
        <h3 className="text-xl font-semibold mt-2 text-purple-300">
          {member.name}
        </h3>
        <p className="text-gray-400 text-sm">{member.role}</p>

        <div className="flex justify-center gap-4 mt-3 text-2xl text-purple-400">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <GithubOutlined />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MemberCard;