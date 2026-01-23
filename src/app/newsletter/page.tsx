"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to subscribe");
      const data = (await res.json()) as { ok: boolean; message?: string };
      setStatus("success");
      setMessage(data.message ?? "Thanks! You're on the list.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="landing">
      <section className="hero">
        <div className="video-sides" aria-hidden>
          <div className="side-wrap left">
            <video className="side-video" src="/images/404_LOOP.mp4" muted loop autoPlay playsInline />
          </div>
          <div className="side-wrap right">
            <video className="side-video" src="/images/404_LOOP.mp4" muted loop autoPlay playsInline />
          </div>
        </div>
        <div className="brand">
          <span className="logo" aria-hidden>
            <Image
              src="/images/SSA_horizontal_logo.svg"
              alt="SSA Logo"
              width={240}
              height={80}
              priority
            />
          </span>
          <div className="copy">
            <div className="cta">
              <h1 className="title">STAY AHEAD OF EVERYONE</h1>
              <form className="cta-row" onSubmit={onSubmit}>
                <input
                  className="email-input"
                  type="email"
                  placeholder="E-MAIL"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="submit-btn" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "SENDING…" : "SUBMIT"}
                </button>
              </form>
              {status !== "idle" && message && (
                <p className={`status ${status}`}>{message}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
