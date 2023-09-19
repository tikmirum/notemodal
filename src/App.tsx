import { Routes, Route } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { NotesViewer, TNote } from './elements/NotesViewer';
import { NoteView } from './elements/NoteView';

const App = () => {
  const [notes, setNotes] = useState<TNote[]>(() => {
    const saved = localStorage.getItem('Note') || '[]';

    return JSON.parse(saved) as TNote[];
  });

  const currentIdRef = useRef(0);

  useEffect(() => {
    localStorage.setItem('Note', JSON.stringify(notes));
  }, [notes]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <NotesViewer
            currentIdRef={currentIdRef}
            notes={notes}
            setNotes={setNotes}
          />
        }
      />
      <Route
        path="/:id"
        element={<NoteView setNotes={setNotes} notes={notes} />}
      />
    </Routes>
  );
};

export default App;
