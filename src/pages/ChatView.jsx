import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, LoadingIndicator, Window } from 'stream-chat-react';
import { user, streamToken, getTimeAndDate } from '../constants';
import 'stream-chat-react/dist/css/v2/index.css';

const ChatView = () => {
  const apiKey = import.meta.env.VITE_APP_STREAM_API_KEY;
  const userData = {
    id: `${user.first_name}-${user.id}`,
    name: `${user.first_name} ${user.last_name}`,
    image: `https://getstream.io/random_png/?id=4&name=${user.first_name}`,
  };

  const [client, setClient] = useState();
  const [channel, setChannel] = useState();
  const [createdBy, setCreatedBy] = useState();

  useEffect(() => {
    async function init() {
      const client = StreamChat.getInstance(apiKey);
      await client.connectUser(userData, streamToken);
      const channel = client.channel('messaging', `${user.first_name}${user.last_name}-${user.id}`, {
        name: 'PostCare',
      });

      await channel.watch();
      setClient(client);
      setChannel(channel);
      setCreatedBy(channel.data.created_by);
    }
    init();
    // if (client)
    //   return () => {
    //     client.disconnectUser();
    //     setChannel(undefined);
    //   };
  }, []);
  if (!client || !channel)
    return (
      <div className="text-3xl w-full flex justify-center items-center h-screen">
        <LoadingIndicator />
      </div>
    );
  return (
    <main className="w-full">
      <section className="px-9 flex justify-between items-center w-full bg-white h-16 border-b border-dark/20">
        <Link to="/messanger">
          <i className="fas fa-angle-left fa-xl cursor-pointer active:text-black/40 text-black hover:text-black/70"></i>
        </Link>
        <div className="text-center">
          <h1 className="text-2xl font-bold">{createdBy.name}</h1>
          <p className="text-sm text-[#666668]">{createdBy.online ? 'Active now' : getTimeAndDate(createdBy.last_active)}</p>
        </div>
        <i className="far fa-video fa-xl cursor-pointer active:text-black/40 text-black hover:text-black/70 active:text-dark"></i>
      </section>
      <div className="w-full h-[calc(100vh-150px)]">
        <Chat client={client}>
          <Channel channel={channel}>
            <Window>
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </div>
    </main>
  );
};

export default ChatView;
