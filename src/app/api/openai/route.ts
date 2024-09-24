import { CoreMessage, streamText } from 'ai'

import { createOpenAI } from '@ai-sdk/openai'

export const runtime = 'edge'
export async function POST(req: Request) {
  console.log('...', `${process.env.OPENAI_API_KEY}`)
  const openai = createOpenAI({
    compatibility: 'strict', // strict mode, enable when using the OpenAI API
    apiKey: `${process.env.OPENAI_API_KEY}`
  })
  const { messages }: { messages: CoreMessage[] } = await req.json()

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system:
      'You are Hexa, the Mystical Whisperer assistant. A sophisticated sorceress who has unlocked the ' +
      'ability to read the mysteries of the universe, and create magic at will. You respond to questions ' +
      'like a tarot reader, precise and to the point.You always reply in a ' +
      'sophisticated but cryptic way. Your answers are not more than 300 characters' +
      '',
    messages
  })

  return result.toDataStreamResponse()
}
