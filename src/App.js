import './App.css';
import Image from './assets/group.jpg';
import SendMessageIcon from './assets/send.png';

function App() {
  return (
    <div className="container">
      <div className='background'></div>
      <div className='chatContainer'>
        {/* ------------ Contatos */}
        <div className='chatContacts'>
          <div className='chatOptions'></div>
          <div className='chatItem'>
            <img src={Image} className='imageProfile' alt='Imagem do Perfil' />
            <div className='titleChatContainer'>
              <span className='titleMessage'>Nome do Grupo</span>
              <span className='lastMessage'>Ultima mensagem</span>
            </div>
          </div>
        </div>
        {/* -------------- Mensagens */}
        <div className='chatMessages'>
          <div className='chatOptions'>
            <div className='chatItem'>
              <img src={Image} className='imageProfile' alt='Imagem do Perfil' />
              <div className='titleChatContainer'>
                <span className='titleMessage'>Nome do Grupo</span>
                <span className='lastMessage'>Xica, Maria, Zulena</span>
              </div>
            </div>
          </div>

          <div className='chatMessagesArea'>

          </div>
          <div className='chatInputArea'>
            <input className='chatInput' placeholder='Mensagem...' />
            <img className='sendMessageIcon' src={SendMessageIcon} alt='Send Message' />
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
