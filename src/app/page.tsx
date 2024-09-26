import Chat from './components/Chat'

export default function Home() {
  return (
    <div className="h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen mb-10">
      <main className="flex sm:w-full md:w-2/4 h-full bg-cover bg-crystal-full mb-20">
        <Chat />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-mono">
        Built by @geekchiq
      </footer>
    </div>
  )
}
