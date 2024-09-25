import React, { useEffect, useRef } from 'react'

import { Message } from '@/types/message'

const Messages = ({ messages }) => {
  const chatRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    const { offsetHeight, scrollHeight, scrollTop } =
      chatRef.current as HTMLDivElement
    if (scrollHeight >= scrollTop + offsetHeight)
      chatRef.current?.scrollTo(0, scrollHeight + 200)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])
  return (
    <div
      className="w-full h-full flex-grow-0 content-between overflow-y-auto overflow-x-hidden scroll-smooth"
      ref={chatRef}
    >
      {messages.map((message: Message) => {
        return (
          <div
            key={message.id}
            className={
              'flex w-full py-4' +
              ' ' +
              (message.role === 'user' ? 'justify-end' : 'justify-start')
            }
          >
            {message.role === 'assistant' ? (
              <div
                key={message.id}
                className="bg-fuchsia-400 p-5 min-h-12 min-w-20 max-w-screen-sm content-center rounded-lg outline-none mb-10 ml-4"
              >
                <p className="text-purpleme text-2xl">{message.content}</p>
              </div>
            ) : (
              <div
                key={message.id}
                className="bg-fuchsia-900 p-5 min-h-12 min-w-20 max-w-screen-sm content-center rounded-lg outline-none mb-10 mr-4"
              >
                <p className="text-rose-100 text-2xl">{message.content}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Messages
