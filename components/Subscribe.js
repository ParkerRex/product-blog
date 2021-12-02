import React, { useRef, useState } from 'react'

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null)
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error)

      return
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = ''
    setMessage('Success! 🎉 You are now subscribed to the newsletter.')
  }
  // TODO: get the darkmode to work
  return (
    <div className="w-full p-8 my-4 border border-blue-300 rounded dark:border-gray-800 bg-blue-50 dark:bg-gray-900 ">
      <form onSubmit={subscribe}>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Join 2PM Tech Tuesdays
        </p>
        <label
          className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400"
          htmlFor="email-input"
        >
          {'Email Address'}
        </label>
        <input
          id="email-input"
          name="email"
          placeholder="you@awesome.com"
          ref={inputEl}
          required
          type="email"
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none dark:text-gray-400 focus:outline-none focus:shadow-outline"
        />
        <div className="p-2 text-black dark:text-gray-400">
          {message
            ? message
            : `No Bs. Best Entrepreneurship, PM, Productivity and Investing links on the internet`}
        </div>
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded dark:text-gray-100 hover:bg-blue-700 "
        >
          {'✨ Subscribe'}
        </button>
      </form>
    </div>
  )
}
export default Subscribe
