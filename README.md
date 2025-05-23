# AI Doctor - Voice-Enabled Medical Assistant

## Overview

AI Doctor is an innovative web application that simulates medical consultations through voice interactions. Built with Next.js and powered by advanced AI technology, this platform enables users to have natural voice conversations about their health concerns, receiving preliminary medical assessments and detailed reports.

## Features

- 🎙️ **Voice-Based Interaction**: Natural conversation with an AI medical assistant
- 🤖 **Real-Time Analysis**: Dynamic processing of user responses and symptoms
- 📋 **Comprehensive Reporting**: Detailed summary of the consultation and findings
- 🔒 **Secure Communication**: End-to-end encrypted conversations
- 📱 **Responsive Design**: Seamless experience across all devices
- 🌐 **Accessibility**: Voice-first approach making healthcare more accessible

## Tech Stack

- **Frontend**: Next.js 14, React
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Voice Processing**: VAPI
- **AI Integration**: Google Gemeni
- **Styling**: Tailwind CSS
- **Shadcn**: shadcn/ui
- **Deployment**: Vercel

## Prerequisites

Before running this project, make sure you have:

- Node.js 18.x or later
- npm or yarn package manager
- Firebase account and project setup
- OpenAI API key

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
GOOGLE_GENERATIVE_AI_API_KEY=
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

# Add other required environment variables
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ai-doctor.git
cd ai-doctor
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Sign up or log in to your account
2. Grant microphone permissions when prompted
3. Start the consultation by clicking the "Begin Interview" button
4. Speak naturally with the AI doctor
5. Review the generated medical report at the end of the consultation

## Project Structure
