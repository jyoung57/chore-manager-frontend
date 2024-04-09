import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header>
        <nav className="p-5 border border-blue-600">
          <h1 className="text-3xl text-blue-600">Chore Manager</h1>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items center justify-between p-24">
        <div className="p-5 border w-full h-full border-blue-600">
          <h2 className="text-2xl text-blue-700">Chore</h2>
        </div>
      </main>
    </>
  );
}
