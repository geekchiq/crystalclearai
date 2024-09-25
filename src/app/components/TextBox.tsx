import Image from 'next/image'
import React from 'react'

interface Props {
  input: string
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: React.ChangeEventHandler<HTMLInputElement>
  icon: string
}

const TextBox = (props: Props) => {
  return (
    <form
      onSubmit={props.onSubmit}
      className="flex flex-row h-12 rounded-full border-2 pl-5 outline-none bg-white content-between items-center"
    >
      <input
        type="text"
        placeholder="Type your question here"
        className={'w-11/12 outline-none text-black font-sans'}
        onChange={props.onChange}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        value={props.input}
      />
      <button
        className="ml-10 md:ml-10 sm:ml-0 sm:justify-self-center"
        type="submit"
        disabled={!props.input}
      >
        <Image
          src={props.icon}
          alt="Sparkles"
          className="justify-end md:justify-end sm:justify-start sm:mr-10"
        />
      </button>
    </form>
  )
}

export default TextBox
