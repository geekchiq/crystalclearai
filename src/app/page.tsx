import Chat from './components/Chat'

export default function Home() {
  return (
    <div className="h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex sm:w-full md:w-2/4 h-full row-start-2 bg-cover bg-crystal-full">
        <Chat />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-mono">
        Built by @geekchiq
      </footer>
    </div>
  )
}
