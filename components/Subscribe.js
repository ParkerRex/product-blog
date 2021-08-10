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
    <div className="border border-blue-300 rounded p-8 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <form onSubmit={subscribe}>
        <p className="text-2xl font-bold text-gray-900">Join 2PM Tech Tuesdays</p>
        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="email-input">
          {'Email Address'}
        </label>
        <input
          id="email-input"
          name="email"
          placeholder="you@awesome.com"
          ref={inputEl}
          required
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div className="text-black p-2">
          {message
            ? message
            : `No Bs. Best Entrepreneurship, PM, Productivity and Investing links on the internet`}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded "
        >
          {'✨ Subscribe'}
        </button>
      </form>
    </div>
  )
}
export default Subscribe
