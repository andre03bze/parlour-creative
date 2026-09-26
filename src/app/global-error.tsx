"use client";

/** Last-resort boundary (errors in the root layout itself). Minimal, no dependencies on the app shell. */
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  const es = typeof window !== "undefined" && window.location.pathname.startsWith("/es");
  return (
    <html lang={es ? "es" : "en"}>
      <body style={{ margin: 0, background: "#e4e2dc", color: "#171614", fontFamily: "Helvetica, Arial, sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeContent: "center", padding: "2rem", gap: "1rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 500, margin: 0 }}>{es ? "Algo salió mal" : "Something went wrong"}</h1>
          <p style={{ margin: 0 }}>{es ? "Ocurrió un error inesperado." : "An unexpected error occurred."}</p>
          <p style={{ margin: 0, display: "flex", gap: "1.5rem" }}>
            <button type="button" onClick={reset} style={{ font: "inherit", padding: "0.6rem 1.2rem", border: "1px solid #171614", background: "#171614", color: "#e4e2dc", cursor: "pointer" }}>
              {es ? "Intentar de nuevo" : "Try again"}
            </button>
            <a href={es ? "/es" : "/"} style={{ color: "inherit", alignSelf: "center" }}>{es ? "Volver al inicio" : "Back to home"}</a>
          </p>
        </main>
      </body>
    </html>
  );
}
