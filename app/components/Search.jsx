'use client'

import { useState } from "react"

export function Search ({ ListOfChars }) {
  console.log('List', ListOfChars)
  const [ searchChar, setSearchChar ] = useState('')
  const [ result, setResult ] = useState()


  return (
    <div className="grid w-screen justify-center pt-4">
      <form class="mb-0 hidden lg:flex">
        <div class="relative">
          <input
            class="h-10 rounded-lg border-gray-200 pr-10 text-sm placeholder-gray-300 focus:z-10"
            placeholder="Search..."
            type="text"
          />

          <button
            type="submit"
            class="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600"
          >
            <span class="sr-only">Submit Search</span>
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
    
  )
}