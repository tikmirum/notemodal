import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';

import * as Styled from './styles';

type NoteViewProps = {
  notes: TNote[];
};
export type TNote = { title: string; description: string; id: number };

export const NoteView = ({ notes }: NoteViewProps) => {
  const { id } = useParams();
  const [note] = notes.filter((noteItem) => noteItem.id === Number(id));
  const navigate = useNavigate();

  return (
    <Styled.All>
      <Styled.Row key={note.id}>
        <Styled.Header>{note.title}</Styled.Header>
      </Styled.Row>
      <Styled.TextArea>{note.description}</Styled.TextArea>
      <Styled.RowButton>
        <Styled.BackButton onClick={() => navigate(-1)}>
          Go Back
        </Styled.BackButton>
        <Styled.BackButton>Edit</Styled.BackButton>
      </Styled.RowButton>
    </Styled.All>
  );
};
