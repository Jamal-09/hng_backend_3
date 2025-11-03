# 🚀 HNG-13: STAGE 3 (#track_backend)

## 🧠 Study Coach AI Agent

## Overview

A motivational and intelligent **Study Habit Coach Agent** built with **Mastra** and **TypeScript**  
This agent helps users build consistent study routines, generate personalized study plans, and stay motivated throughout their learning journey.

---

## 🚀 Features

- 💬 **Conversational AI Coach** – Helps users define and achieve their study goals.
- 🗓 **Dynamic Study Plan Generator** – Uses the custom `studyCoachTool` to build structured, daily study plans.
- 🧠 **Persistent Memory** – Remembers user progress, past goals, and preferences.
- 💡 **Motivational Tone** – Encourages and inspires consistent learning habits.
- ⚡ **Powered by Mastra** – Built using [Mastra AI Framework](https://mastra.ai) with `@mastra/core`, `@mastra/memory`, and `@mastra/libsql`.

---

## 🧰 Tech Stack

| Layer                       | Technology                |
| --------------------------- | ------------------------- |
| **AI Framework**            | Mastra                    |
| **Database / Memory Store** | LibSQL                    |
| **Language**                | TypeScript                |
| **Model**                   | `google/gemini-2.5-flash` |

---

## 📁 Project Structure

```
src/
├── mastra/
│ ├── index.ts # Initializes and exports Mastra agents
│ ├── agents/
│ │ └── studyCoach-agent.ts # Main study coach agent definition
│ └── tools/
│ └── studyCoach-tool.ts # Custom tool to generate study plans
├── .env # Environment variables (not committed)
├── package.json # Project dependencies & scripts
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Jamal-09/hng_backend_3.git
cd hng_backend_3
```

### 2️⃣ Install dependencies

```
npm install
```

3️⃣ Create a .env file

```bash
GOOGLE_GENERATIVE_AI_API_KEY=<your_API_Key>
```

### 4️⃣ Run the app in development

```bash
npm run dev
```

### 5️⃣ Build and serve for production

```bash
npm run build
```

## 🧩 How It Works

1. The Study Coach Agent listens to user prompts and identifies learning goals.

2. It uses the studyCoachTool to create structured study plans based on:
   - Goal type
   - Available daily hours
   - Target duration

3. The agent saves user progress and past conversations using Mastra Memory with a LibSQL store.

4. The agent responds in a friendly and motivational tone, avoiding unnecessary follow-up questions.

## 💬 Example Interaction

User:

- I want to study Python for data analysis in 3 months. I can study 2 hours per day.

Agent:

- Excellent! Let’s create a structured 3-month plan to help you master Python for data analysis.
- Week 1: Python basics (syntax, data types, loops)
- Week 2–4: Data handling with Pandas
- Week 5–8: Visualization with Matplotlib and Seaborn
- Week 9–12: Exploratory Data Analysis (EDA) projects

- Stay consistent — your future self will thank you! 🚀

## 🌐 Deployment

Before deployment, ensure:

```bash
npm run build
```

and that your .env file is properly configured.

## 📬 Contact

Connect with me:

- 📧 Email: napg.adekunle@gmail.com
- 🌈 Slack: Jamal-09

### Built with 💻 & ❤️ by Jamal
