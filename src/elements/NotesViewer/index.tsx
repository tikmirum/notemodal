import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PlusSvg from 'assets/images/plus.png';
import DeleteSvg from 'assets/images/delete.svg';
import EditSvg from 'assets/images/edit.svg';

import * as Styled from './styles';
import { AddNoteModal } from 'components/AddNoteModal';

type NotesViewerProps = {
  notes: TNote[];
  currentIdRef: React.MutableRefObject<number>;
  setNotes: React.Dispatch<React.SetStateAction<TNote[]>>;
};
export type TNote = { title: string; description: string; id: number };

export const NotesViewer = ({
  notes,
  setNotes,
  currentIdRef,
}: NotesViewerProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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

  const editNote = (note: TNote) => {
    navigate(`/${note.id}`, {
      state: {
        isEdit: true,
      },
    });
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
            <Link to={`/${note.id}`}>
              <Styled.Title>{note.title}</Styled.Title>
            </Link>
            <Styled.ActionButtons>
              <Styled.Delete onClick={() => editNote(note)} src={EditSvg} />
              <Styled.Delete onClick={() => deleteNote(note)} src={DeleteSvg} />
            </Styled.ActionButtons>
          </Styled.RowNote>
        ))}
      </Styled.All>
      <AddNoteModal
        currentIdRef={currentIdRef}
        setNotes={setNotes}
        setOpen={setOpen}
        open={open}
      />
    </>
  );
};
