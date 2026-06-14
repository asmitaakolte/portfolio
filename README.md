# Asmita Arun Kolte — MLOps & ML Platform Engineer

My personal portfolio: a single, self-contained site that doesn't just *say* I do MLOps/GenAI — it **runs** it.

🔗 **Live:** https://asmitaakolte.github.io

---

## About

I'm an **MLOps & ML Platform Engineer** based in Chicago, IL (open to remote), with 5+ years making production infrastructure reliable, secure, and automated — now focused on taking AI/ML systems from prototype to production. The site tells that story role by role, and backs it with things you can actually interact with.

## What makes it different

- 🤖 **Live AI assistant** — a real LLM (Google Gemini) grounded only in my résumé, behind a serverless proxy so the API key stays secret. Ask it anything about my experience, or paste a job description and ask *"how does Asmita fit this role?"*
- ⚡ **In-browser ML demo** — a working, client-side version of my log classifier. Paste a log line and watch it predict `error / warning / info` with confidence and the tokens that drove the decision. No server, runs on your device.
- 🏗️ **"How I ship ML to production" diagram** — a clean prototype → production reference pipeline (CI/CD gate → MLflow registry → Kubernetes deploy → monitoring → rollback).
- 🧭 **Interactive career journey** — press *Run* and step through each role, from first production code in India to shipping ML in the US.
- 📊 **Live GitHub contribution graph** and a written field note on how I think about reliability.

## Tech

- **Front end:** hand-written HTML, CSS, and vanilla JavaScript — no framework, no build step
- **AI backend:** Cloudflare Workers + Google Gemini (serverless proxy)
- **Hosting:** GitHub Pages
- Self-contained single file (résumé PDF and photo embedded), built to load fast

## How the AI assistant works

A static site can't safely hold an API key, so the assistant talks to a small **Cloudflare Worker** that:

1. holds the `GEMINI_API_KEY` secret,
2. grounds Gemini on my résumé facts with guardrails (no fabricated employers, dates, or certifications),
3. supports a **job-fit mode** that honestly maps my experience to a pasted job description.

The front end calls this Worker via `CONFIG.botEndpoint` in `index.html`. If the Worker is ever unreachable, it gracefully falls back to a lightweight built-in bot, so the site never breaks.

## Run it

It's one file — just open `index.html` in any browser. (The live AI assistant needs the deployed Cloudflare Worker; everything else, including the in-browser ML demo, runs locally.)

## Deploy

Hosted on **GitHub Pages** from the `main` branch, root folder. Push `index.html` to the repo root and Pages serves it automatically.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire portfolio site |
| `asmita-assistant-worker.js` | Cloudflare Worker backend for the AI assistant (deployed separately) |

## Contact

- ✉️ asmitaakolte97@gmail.com
- 💼 [linkedin.com/in/asmita-kolte](https://www.linkedin.com/in/asmita-kolte/)
- 🐙 [github.com/asmitaakolte](https://github.com/asmitaakolte)
- 📍 Chicago, IL · open to remote
