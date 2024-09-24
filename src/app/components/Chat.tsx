'use client'

import { Dancing_Script, Roboto } from 'next/font/google'

import Image from 'next/image'
import SparklesIcon from '@/assets/sparkles.svg'
import { useChat } from 'ai/react'

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
})

const Chat = () => {
  const { messages, input, handleSubmit, handleInputChange, isLoading } =
    useChat({
      api: '/api/openai'
    })

  const renderMessages = () => {
    return (
      <div className="w-full h-full content-between">
        {messages.map((message) => {
          console.log(message)
          return (
            <div
              key={message.id}
              className={
                'flex w-full py-4' +
                dancing.className +
                ' ' +
                (message.role === 'user' ? 'justify-end' : 'justify-start')
              }
            >
              {message.role === 'assistant' ? (
                <div
                  key={message.id}
                  className="bg-fuchsia-400 p-5 min-h-12 min-w-20 max-w-screen-sm content-center rounded-lg outline-none mb-10"
                >
                  <p className="text-purpleme text-xl">{message.content}</p>
                </div>
              ) : (
                <div
                  key={message.id}
                  className="bg-fuchsia-900 p-5 min-h-12 min-w-20 max-w-screen-sm content-center rounded-lg outline-none mb-10"
                >
                  <p className="text-rose-100 text-xl">{message.content}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div className="flex flex-col w-full h-full content-between">
      <div className="flex w-full justify-center content-center mb-32">
        <p className={'text-7xl text-center ' + dancing.className}>
          What do you wish to seek?
        </p>
      </div>
      {renderMessages()}
      <form
        onSubmit={handleSubmit}
        className="flex flex-row h-12 rounded-full border-2 pl-5 outline-none bg-white content-between items-center"
      >
        <input
          type="text"
          placeholder="Type your question here"
          className="w-11/12 outline-none text-black"
          onChange={handleInputChange}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          value={input}
        />
        <button
          className="ml-10 md:justify-self-end"
          type="submit"
          disabled={!input}
        >
          <Image src={SparklesIcon} alt="Sparkles" className="justify-end" />
        </button>
      </form>
    </div>
  )
}

export default Chat
