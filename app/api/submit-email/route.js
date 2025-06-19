// Actualicemos la función de envío de email en app/api/submit-email/route.js
// con una plantilla HTML más elaborada y atractiva

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Altalaya <no-reply@thallein.com>",
      to: ["soporte@altalaya.com"],
      subject: "Nuevo interesado en Altalaya",
      html: `
      <html>
        <body>
          <h2>Nuevo interesado en Altalaya</h2>
          <p>Se ha registrado un nuevo contacto interesado en Altalaya.</p>
          <p>Email: ${email}</p>
          <p>Saludos,<br>Equipo Altalaya</p>
        </body>
      </html>
      `,
    });

    await resend.emails.send({
      from: "Altalaya <no-reply@thallein.com>",
      to: [email],
      subject: "¡Bienvenido a la Aventura de Altalaya! 🏔️",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bienvenido a Altalaya</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

            body {
              font-family: 'Poppins', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              color: #333;
              line-height: 1.6;
            }

            .container {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            }

            .header {
              background-color: #000;
              background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1519681393784-d120267933ba');
              background-size: cover;
              background-position: center;
              padding: 50px 30px;
              text-align: center;
              color: white;
            }

            .logo {
              width: 80px;
              height: 80px;
              background: #ffffff;
              border-radius: 12px;
              padding: 10px;
              margin: 0 auto 20px;
            }

            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 700;
              letter-spacing: 1px;
            }

            .header p {
              font-size: 16px;
              opacity: 0.9;
              margin: 10px 0 0;
            }

            .content {
              padding: 40px 30px;
            }

            h2 {
              color: #333;
              font-size: 22px;
              margin-top: 0;
              margin-bottom: 20px;
              font-weight: 600;
            }

            p {
              margin: 0 0 20px;
              color: #555;
            }

            .features {
              display: flex;
              flex-wrap: wrap;
              margin: 30px 0;
            }

            .feature {
              flex: 1 0 45%;
              margin-bottom: 25px;
              padding-left: 45px;
              position: relative;
            }

            .feature-icon {
              position: absolute;
              left: 0;
              top: 3px;
              background: #f0f7ff;
              color: #0070f3;
              width: 34px;
              height: 34px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 16px;
            }

            .feature h3 {
              margin: 0 0 8px;
              font-size: 16px;
              font-weight: 600;
              color: #222;
            }

            .feature p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            .cta {
              background: #E5F7FF;
              padding: 30px;
              border-radius: 8px;
              text-align: center;
              margin: 20px 0 30px;
            }

            .cta h3 {
              margin-top: 0;
              color: #FFF;
              font-size: 18px;
            }

            .button {
              display: inline-block;
              background: #0f172a;
              color: white;
              text-decoration: none;
              padding: 12px 30px;
              border-radius: 6px;
              font-weight: 500;
              font-size: 16px;
              margin-top: 10px;
              transition: background-color 0.2s;
            }

            .button:hover {
              background: #1e293b;
            }

            .progress-bar {
              height: 8px;
              background: #e2e8f0;
              border-radius: 4px;
              overflow: hidden;
              margin: 0 auto;
              max-width: 300px;
            }

            .progress {
              width: 75%;
              height: 100%;
              background: linear-gradient(90deg, #0ea5e9, #2563eb);
              border-radius: 4px;
            }

            .progress-text {
              font-size: 14px;
              color: #64748b;
              margin-top: 10px;
            }

            .social {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-top: 40px;
              text-align: center;
            }

            .social h3 {
              font-size: 16px;
              color: #333;
              margin-bottom: 15px;
            }

            .social-icons {
              display: flex;
              justify-content: center;
              gap: 15px;
            }

            .social-icon {
              background: #f8fafc;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              color: #0f172a;
              text-decoration: none;
              transition: all 0.2s;
              border: 1px solid #e2e8f0;
            }

            .social-icon:hover {
              background: #0f172a;
              color: white;
              transform: translateY(-2px);
            }

            .footer {
              padding: 25px 30px;
              background: #f8fafc;
              text-align: center;
              font-size: 13px;
              color: #64748b;
              border-top: 1px solid #e2e8f0;
            }

            .footer a {
              color: #0ea5e9;
              text-decoration: none;
            }

            @media (max-width: 600px) {
              .feature {
                flex: 0 0 100%;
              }

              .header {
                padding: 40px 20px;
              }

              .content {
                padding: 30px 20px;
              }

              .cta {
                padding: 20px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">
                <!-- Aquí iría tu logo real -->
                <img src="https://media.discordapp.net/attachments/1299116882024206458/1365280051406311454/6d225414-f02e-402d-9b75-cd3acf903f15.png?ex=680cbba1&is=680b6a21&hm=763e59b898d93fc586c1346892dd416a2e02984f3312c3d6f0ca8948ad6bcac2&=&format=webp&quality=lossless&width=1430&height=1430" alt="Altalaya Logo" style="max-width: 100%;">
              </div>
              <h1>¡Bienvenido a Altalaya!</h1>
              <p>Tu aventura por descubrir los mejores miradores comienza aquí</p>
            </div>

            <div class="content">
              <h2>Hola, explorador!</h2>
              <p>Gracias por unirte a nuestra lista de espera. Estamos creando una comunidad de aventureros y amantes de las vistas panorámicas para descubrir los mejores miradores y lugares secretos.</p>

              <div class="features">
                <div class="feature">
                  <div class="feature-icon">📍</div>
                  <h3>Descubre miradores</h3>
                  <p>Encuentra lugares increíbles cerca de ti o en tu próximo destino.</p>
                </div>

                <div class="feature">
                  <div class="feature-icon">📸</div>
                  <h3>Comparte tus hallazgos</h3>
                  <p>Sube tus miradores secretos y compártelos con la comunidad.</p>
                </div>

                <div class="feature">
                  <div class="feature-icon">👥</div>
                  <h3>Conecta con exploradores</h3>
                  <p>Conoce a personas con tus mismos intereses y planifica aventuras juntos.</p>
                </div>

                <div class="feature">
                  <div class="feature-icon">🏆</div>
                  <h3>Gana reconocimiento</h3>
                  <p>Recibe puntos por tus contribuciones y desbloquea recompensas exclusivas.</p>
                </div>
              </div>

              <div class="cta">
                <h3>¿Tienes un mirador secreto esperando ser descubierto?</h3>
                <p>Serás de los primeros en poder compartir tus lugares favoritos cuando lancemos la plataforma.</p>
                <a href="https://www.instagram.com/miralia_app?igsh=MWwxcTM1aWlqc3NwcA==" class="button">Únete Instagram</a>
              </div>

              <div class="social">
                <h3>Síguenos en redes sociales</h3>
                <div class="social-icons">
                  <a href="https://www.instagram.com/altalaya_app/" class="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://www.tiktok.com/@app_miradores" class="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://discord.gg/t5n3TmgvrJ" aria-label="Discord">
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
                  </a>
                </div>
              </div>
            </div>

            <div class="footer">
              <p>Altalaya © ${new Date().getFullYear()} - Todos los derechos reservados</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email added to waitlist" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
