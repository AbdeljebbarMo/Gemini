import './Sidebar.css';
import { assets } from '../../assets/assets';
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {

      const [extended , setExtended]=useState(false)
      const { setRecentPrompt, newChat, prevPromps, onSend } = useContext(Context);

      const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSend(prompt);
      };

  return (
    <div className='sidebar'>
      <div className='top'>
        <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="Menu Icon" />
        
        <div onClick={() => newChat()} className='new-chat'>
          <img src={assets.plus_icon} alt="Plus Icon" />
          {extended?<p>New Chat</p>:null}
        </div>
        {extended?
        <div className='recent'>
          <h3 className='recent-title'>Recent</h3>
            {prevPromps.map((item, idx) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  key={idx}
                  className="recent-entry"
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 20)}</p>
                </div>
              );
            })}
        </div>
        :null
        }
      </div>
      
      <div className='bottom'>
        <div className='bottom-item recent-entry'>
          <img src={assets.question_icon} alt="Help Icon" />
          {extended?<p>Help</p>:null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.history_icon} alt="History Icon" />
          {extended?<p>Activity</p>:null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.setting_icon} alt="Settings Icon" />
          {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
