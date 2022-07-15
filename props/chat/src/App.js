import './App.css';
import MessageHistory from './components/MessageHistory';
import messages from './messages'

export default function App() {
  return (
    <div className="clearfix container">
    <div className="chat">
      <div className="chat-history">
        <MessageHistory list={messages} />
      </div>
    </div>
  </div>
  );
}
