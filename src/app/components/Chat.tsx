'use client'

import Messages from './Messages'
import SparklesIcon from '@/assets/sparkles.svg'
import TextBox from './TextBox'
import { useChat } from 'ai/react'

const Chat = () => {
  const { messages, input, handleSubmit, handleInputChange } = useChat({
    api: '/api/openai',
    initialMessages: [
      {
        id: '',
        role: 'assistant',
        content: 'Hi! I am Hexa, the Mystical Whisperer. '
      }
    ]
  })

  return (
    <div className="flex flex-col w-full h-full content-between">
      <div className="flex w-full justify-center content-center my-10">
        <p className={'text-4xl sm:text-5xl text-center'}>
          What do you wish to seek?
        </p>
      </div>
      <Messages messages={messages} />
      <TextBox
        input={input}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        icon={SparklesIcon}
      />
    </div>
  )
}

export default Chat
