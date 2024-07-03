import Image from 'next/image';
import axios from 'axios';

export default function Home() {
  const baseURL: string | undefined = process.env.NEXT_PUBLIC_SERVER;
  if (baseURL) {
    axios.get(baseURL)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <>
      {/* <header>
        <nav className="p-5 border border-blue-600">
          <h1 className="text-3xl text-blue-600">Chore Manager</h1>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items center justify-between p-24">
        <div className="p-5 border w-full h-full border-blue-600">
          <h2 className="text-2xl text-blue-700">Chore</h2>
        </div>
      </main> */}
    </>
  );
}
