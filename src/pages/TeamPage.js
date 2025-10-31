import React, { useState } from "react";
import { motion } from "framer-motion";
import teamMembers from "../data/TeamData";
import MemberCard from "../components/MemberCard";
import MemberModal from "../components/MemberModal";

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white py-16 px-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
      >
        Meet Our Brilliant Minds 💡
      </motion.h1>

      {/* 🔑 KEY CHANGE: 
        1. Used 'flex' instead of 'grid' for horizontal centering.
        2. Used 'flex-wrap' to allow cards to move to the next line.
        3. Used 'justify-center' to center all items (including the last row).
        4. Maintained a gap for spacing between the cards.
      */}
      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // Added 'min-w-[320px]' to help with wrapping/sizing based on MemberCard's min width
            className="min-w-[320px] sm:min-w-[360px]" 
          >
            <MemberCard member={member} onClick={handleCardClick} />
          </motion.div>
        ))}
      </div>

      <MemberModal
        visible={modalVisible}
        member={selectedMember}
        onClose={closeModal}
      />
    </div>
  );
};

export default TeamPage;