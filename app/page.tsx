"use client"

import {useChat} from "ai/react"

export default function Home() {
  const {messages, input, handleInputChnage, handleSubmit} = useChat(
    {
      api:"/api",
    }
  );
  return (
    <div className="min-h-screen bg-neutral-800">
        {messages.length !== 0 ?(
          <div>

          </div>
        ):(
          <div className="w-full flex justify-center pt-32">
            <h1 className="font-bold text-3xl">
              Please use the input field below
            </h1>
          </div>
        )}
    </div>
  );
}
