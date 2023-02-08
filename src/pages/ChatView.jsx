import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { profile } from '../assets/img';
// import { getMessages, sendMessage } from '../redux/slice/messanger';
// import { getTime } from '../constants';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, LoadingIndicator, Window } from 'stream-chat-react';
import { user, streamToken } from '../constants';

const ChatView = () => {
  const apiKey = import.meta.env.VITE_APP_STREAM_API_KEY;
  const userData = {
    id: `${user.first_name}-${user.id}`,
    name: `${user.first_name} ${user.last_name}`,
    image: 'https://getstream.io/random_png/?id=4&name=Jhon',
  };

  const [client, setClient] = useState();
  const [channel, setChannel] = useState();

  useEffect(() => {
    async function init() {
      const client = StreamChat.getInstance(apiKey);
      await client.connectUser(userData, streamToken);
      const channel = client.channel('messaging', 'postcare-2', {
        name: 'PostCare',
      });

      await channel.watch();
      setClient(client);
      setChannel(channel);
    }
    init();
    if (client)
      return () => {
        client.disconnectUser();
        setChannel(undefined);
      };
  }, []);

  if (!client || !channel) return <LoadingIndicator />;

  // const dispatch = useDispatch();
  // const messages = useSelector((state) => state.messages.messages);
  // useEffect(() => {
  // document.title = 'Chat';
  // dispatch(getMessages());
  // This will work but it's not good for performance and it will cause a lot of requests to the server
  // setInterval(() => {
  //   dispatch(getMessages());
  // }, 1000);
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { text, image } = e.target.elements;

  //   const data = {
  //     text: text.value,
  //     image: image.value,
  //     id: 3,
  //   };

  //   if (text.value.length !== 0) {
  //     dispatch(sendMessage(data.text, data.id));
  //     text.value = '';
  //     image.value = '';
  //   }
  // };

  return (
    // <main className="flex mb-10 justify-between items-center flex-col w-full h-screen">
    //   <section className="px-9 flex justify-between items-center w-full bg-white h-20 border-b border-dark/20">
    //     <Link to="/messanger">
    //       <i className="fas fa-angle-left fa-xl cursor-pointer active:text-black/40 text-black hover:text-black/70"></i>
    //     </Link>
    //     <div className="text-center">
    //       <h1 className="text-2xl font-bold">John Doe</h1>
    //       <p className="text-sm text-[#666668]">Active now</p>
    //     </div>
    //     <i className="far fa-video fa-xl cursor-pointer active:text-black/40 text-black hover:text-black/70 active:text-dark"></i>
    //   </section>
    //   <section className="my-6 w-full h-full flex flex-col overflow-scroll">
    //     <p className="text-center text-dark">8/20/2022</p>
    //     {messages.length === 0 ? (
    //       <p className="text-center text-dark">No messages</p>
    //     ) : (
    //       messages.map((message) => (
    //         <div key={message.id} className={`${message.from_id === '4' ? 'flex-row' : 'flex-row-reverse'} py-2 mx-2 flex justify-start items-start`}>
    //           <img src={profile} alt="profile" className="w-8 h-8 rounded-full" />
    //           <div className={`${message.from_id === '4' ? 'ml-2 bg-light' : 'mr-2 bg-[#007aff]'} p-2 rounded-xl flex flex-col`}>
    //             <p className={`${message.from_id === '4' ? 'text-black' : 'text-white'}`}>{message.text}</p>
    //             <p className={`${message.from_id === '4' ? 'text-black/70' : 'text-white/70'} self-end`}>{getTime(message.updated_at)}</p>
    //           </div>
    //         </div>
    //       ))
    //     )}
    //   </section>
    //   {/* need some work to break the input into multiple lines */}
    //   <section className="mb-10 w-[90%] p-6 px-10 rounded-2xl flex justify-between items-center items-end bg-light text[#e5e5ea]">
    //     <i className="far fa-camera fa-xl cursor-pointer active:text-black/40 text-black hover:text-black/70 active:text-dark"></i>
    //     <form onSubmit={handleSubmit} className="flex justify-between items-center w-full">
    //       <input type="text" name="text" className="focus:outline-none bg-light w-full px-4" placeholder="Start typing..." />
    //       <input type="file" name="image" className="hidden" />
    //     </form>
    //     <i className="far fa-paper-plane-top fa-xl cursor-pointer active:text-black/40 text-black hover:text-black/70 active:text-dark"></i>
    //   </section>
    // </main>
    <Chat client={client} theme={'messaging'}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatView;
