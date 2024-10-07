import React, { useState, useEffect } from 'react'
import { Save } from 'lucide-react'

function App() {
  const [note, setNote] = useState('')

  useEffect(() => {
    chrome.storage.sync.get(['note'], (result) => {
      if (result.note) {
        setNote(result.note)
      }
    })
  }, [])

  const handleSave = () => {
    chrome.storage.sync.set({ note: note })
  }

  return (
    <div className="w-64 p-4 bg-white">
      <h1 className="text-xl font-bold mb-4">Quick Note</h1>
      <textarea
        className="w-full h-32 p-2 border rounded mb-2"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your note here..."
      />
      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center"
        onClick={handleSave}
      >
        <Save className="mr-2" size={16} />
        Save Note
      </button>
    </div>
  )
}

export default App