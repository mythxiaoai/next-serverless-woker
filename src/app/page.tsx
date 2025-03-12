import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello World, this is Aero Site</h1>
      <div className="text-center">
        <div className="space-x-4">
          {/* <button
            onClick={handleFetchWorkerData}
            className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            获取Worker数据
          </button> */}
        </div>
      </div>
    </div>
  );
}

