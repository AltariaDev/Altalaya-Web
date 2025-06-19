"use client";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus({
        type: "error",
        message: "Por favor ingresa un correo válido",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response: Response = await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data: { error?: string } = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ha ocurrido un error");
      }

      setStatus({
        type: "success",
        message: "¡Gracias por unirte a nuestra lista de espera!",
      });
      setEmail("");
    } catch (error: unknown) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "No pudimos procesar tu solicitud",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-screen h-screen">
        <Image
          src={"/image/bg.png"}
          width={500}
          height={500}
          alt="bg"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center min-h-screen">
        <header className="w-full flex justify-between items-center py-6 px-12">
          <div className="flex justify-center">
            <Image
              src={"/image/logo.png"}
              width={50}
              height={50}
              alt="logo"
              className="rounded-md"
            />
          </div>
          <div className="flex justify-end gap-4">
            <Link
              href="https://www.instagram.com/altalaya_app/"
              aria-label="Instagram"
            >
              <Instagram className="size-5 text-white" />
            </Link>
            <Link
              href="https://www.tiktok.com/@app_miradores"
              aria-label="TikTok"
            >
              <svg
                fill="white"
                width="800px"
                height="800px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 text-white"
              >
                <title>tiktok</title>
                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
              </svg>
            </Link>
            <Link href="https://discord.gg/t5n3TmgvrJ" aria-label="Discord">
              {" "}
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 text-white"
              >
                <path
                  d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-white text-lg md:text-xl">
                ¿Conoces un lugar con vistas increíbles? ¡Compártelo!
              </p>
              <p className="text-white/80 text-base md:text-lg">
                Encuentra nuevos rincones mágicos cerca de ti.
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Únete a Altalaya!
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Sube tus lugares secretos, descubre nuevos horizontes y conecta
              con otros exploradores. ¡La aventura empieza aquí!
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full max-w-lg mx-auto relative"
            >
              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
                <input
                  type="email"
                  placeholder="Tu dirección de email"
                  className="flex-1 px-4 py-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="relative">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-colors w-full sm:w-auto disabled:opacity-70"
                  >
                    {isSubmitting ? "Enviando..." : "Join Waitlist!"}
                  </button>
                  <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden sm:block">
                    <svg
                      width="80"
                      height="60"
                      viewBox="0 0 80 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M1 40C20 40 60 40 60 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M50 5L60 1L56 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {status.message && (
                <div
                  className={`mt-4 px-4 py-2 flex flex-col rounded-md ${
                    status.type === "error"
                      ? "bg-red-500/20 text-red-200"
                      : "bg-green-500/20 text-green-200"
                  }`}
                >
                  {status.message}
                  <Link
                    href={"https://discord.gg/t5n3TmgvrJ"}
                    className="font-semibold text-white"
                  >
                    Únete al discord
                  </Link>
                </div>
              )}
            </form>
          </div>
        </main>
        <footer className="w-full py-6 px-4 flex justify-end">
          <Link
            href={"https://thallein.com"}
            className="px-4 py-1 bg-white opacity-20 hover:opacity-100 transition-all duration-300 text-black rounded-md text-xs font-medium flex items-center gap-2"
          >
            Made by Thallein
          </Link>
        </footer>
      </div>
    </div>
  );
}
