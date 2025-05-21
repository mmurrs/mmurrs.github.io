import { useRef, useState } from 'react';

export default function App() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const pick = () => fileRef.current?.click();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setImgSrc(r.result as string);
    r.readAsDataURL(f);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-waves bg-fixed bg-cover px-4">
      <section className="w-full max-w-md space-y-6 text-center backdrop-blur-sm bg-white/60 rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Matt Murray</h1>
        <p className="text-lg text-gray-700">The Open Internet • New York</p>

        {/* photo */}
        <div className="flex flex-col items-center gap-4">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt="profile"
              className="h-48 w-48 rounded-full object-cover shadow-lg"
            />
          ) : (
            <div className="h-48 w-48 rounded-full border-2 border-dashed border-gray-300" />
          )}

          {imgSrc ? (
            <button
              onClick={() => setImgSrc(null)}
              className="text-sm text-red-600 hover:underline"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={pick}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Upload image
            </button>
          )}
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={onChange}
          className="hidden"
        />
      </section>
    </main>
  );
}
