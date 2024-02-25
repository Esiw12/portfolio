
import React, { useState } from 'react';
import Header from './Components/app/Header'; // Если Header.js находится в src/Components/app/
import Footer from './Components/app/Footer'; // Если Footer.js находится в src/Components/lv/
import MainContent from './Components/app/MainContent'; // 
import SVGComponent from './Components/app/SVGComponent'; 
import Modal from './Components/app/Modal';
import './Style/index/main.module.css'; 
import './Style/index/header.module.css';
import './Style/index/SVGComponent.module.css';
import './Style/index/footer.module.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    console.log('toggleModal called');
    setIsModalOpen(!isModalOpen);
  };
  console.log('Modal open:', isModalOpen);

  return (
    <div>
      <SVGComponent/>
      <Header openModal={toggleModal} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <MainContent />
      
      <Footer />
    </div>
  );

}
export default App;
