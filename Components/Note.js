import React from 'react'

export default function Note({notes}) {
    
  return (
    <div>
      {notes.map((note)=>{
        return(
          <div>

            {note.note_id}
          </div>
        )
      })}
    </div>
  )
}


