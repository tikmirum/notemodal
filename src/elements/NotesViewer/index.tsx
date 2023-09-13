import React, { useEffect, useState } from 'react';
import PlusSvg from 'assets/images/plus.png';
import DeleteSvg from 'assets/images/delete.svg';

import * as Styled from './styles';
import { AddNoteModal } from 'components/AddNoteModal';

export type TNote = { title: string; id: number };

export const NotesViewer = () => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState<TNote[]>(() => {
    const saved = localStorage.getItem('Note') || '[]';

    return JSON.parse(saved) as TNote[];
  });

  useEffect(() => {
    localStorage.setItem('Note', JSON.stringify(notes));
  }, [notes]);

  const nullNotes = () => {
    setNotes([]);
  };

  const deleteNote = (note: TNote) => {
    const newNotes = notes.filter((noteItem) => noteItem.id !== note.id);
    setNotes(newNotes);
  };

  const showModal = () => {
    setOpen(true);
  };

  return (
    <>
      <Styled.All>
        <Styled.Row>
          <Styled.Header>Notes</Styled.Header>
          <Styled.ActionButtons>
            {notes.length ? (
              <Styled.Delete
                onClick={nullNotes}
                src={DeleteSvg}
              ></Styled.Delete>
            ) : null}
            <Styled.Plus onClick={showModal} src={PlusSvg} />
          </Styled.ActionButtons>
        </Styled.Row>
        {notes.map((note) => (
          <Styled.RowNote key={note.id}>
            <Styled.Title>{note.title}</Styled.Title>
            <Styled.Delete onClick={() => deleteNote(note)} src={DeleteSvg} />
          </Styled.RowNote>
        ))}
      </Styled.All>
      <AddNoteModal setNotes={setNotes} setOpen={setOpen} open={open} />
    </>
  );
};
