import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTime, user, streamToken } from '../constants';
import { StreamChat } from 'stream-chat';

const Messanger = () => {
  const [messages, setMessages] = useState([]);
  const apiKey = import.meta.env.VITE_APP_STREAM_API_KEY;
  const userData = {
    id: `${user.first_name}-${user.id}`,
    name: `${user.first_name} ${user.last_name}`,
    image: `https://getstream.io/random_png/?id=4&name=${user.first_name}`,
  };

  useEffect(() => {
    document.title = 'Messanger';

    async function init() {
      const client = StreamChat.getInstance(apiKey);
      await client.connectUser(userData, streamToken);
      const channel = client.channel('messaging', `${user.first_name}${user.last_name}-${user.id}`);
      channel.query().then((data) => {
        const lastMessage = data.messages.reverse().find((message) => message.user.name === data.channel.created_by.name);
        if (lastMessage) {
          setMessages(lastMessage);
        }
      });
    }
    init();
  }, []);
  return (
    <main className="flex flex-col p-4 w-full">
      <section className="my-6 xl:ml-6">
        <h1 className="text-2xl font-bold mb-4">Messenger</h1>
        <p>Your secure, online, healthcare tracking site. Helping you manage your personal health information with your practices, anytime and anywhere.</p>
      </section>
      <section className="flex flex-col justify-start items-center xl:items-start my-6 xl:ml-6">
        {messages.length === 0 ? (
          'no message'
        ) : (
          <article className="flex flex-col md:flex-row justify-between items-center border p-4 w-full">
            <img className="rounded-full mr-4 w-20 h-20" src={messages.user.image} alt="profile" />
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start md:w-3/4 md:mr-4">
              <Link to="/messanger/1">
                <h2 className="text-xl font-bold hover:underline">{messages.user.name}</h2>
              </Link>
              <p>{messages.text}</p>
            </div>
            <div className="flex md:flex-col self-end md:self-start mt-4">
              <p className="mr-2 md:mr-0 md:mb-2 text-dark font-bold text-sm">{getTime(messages.updated_at)}</p>
              {/* <p className="px-2 w-fit bg-dark rounded-full font-bold">{messages.unreadMsgsCount}</p> */}
            </div>
          </article>
        )}
        {/* </li> */}
        {/* ))}
        </ul> */}
      </section>
    </main>
  );
};
export default Messanger;
