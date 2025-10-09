import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WaitlistContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

interface WaitlistProviderProps {
  children: ReactNode;
}

export const WaitlistProvider: React.FC<WaitlistProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <WaitlistContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </WaitlistContext.Provider>
  );
};

export const useWaitlist = (): WaitlistContextType => {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
};
