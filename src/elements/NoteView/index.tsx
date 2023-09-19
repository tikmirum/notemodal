import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Form } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';

import * as Styled from './styles';

type NoteViewProps = {
  notes: TNote[];
  setNotes: React.Dispatch<React.SetStateAction<TNote[]>>;
};
export type TNote = { title: string; description: string; id: number };

export const NoteView = ({ notes, setNotes }: NoteViewProps) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [note] = notes.filter((noteItem) => noteItem.id === Number(id));
  const [isEditMode, setEditMode] = useState(location.state?.isEdit);
  const [hasChanged, setHasChanged] = useState(false);
  const [form] = Form.useForm();

  const saveEdit = (values: { title: string; description: string }) => {
    if (!id) {
      return;
    }

    setNotes((prevState) => {
      const copyOfNotes = [...prevState];
      const editedItemIndex = copyOfNotes.findIndex(
        (item) => item.id === note.id
      );

      const editedItem: TNote = {
        title: values.title,
        description: values.description,
        id: note.id,
      };

      copyOfNotes.splice(editedItemIndex, 1, editedItem);

      return copyOfNotes;
    });
    form.resetFields();
    setEditMode(false);
  };

  useEffect(() => {
    if (!note) {
      navigate('/');
    }
  }, [note]);

  if (!note) {
    return null;
  }

  return (
    <Fragment key={note.id}>
      <Styled.All>
        {!isEditMode ? (
          <>
            <Styled.Row>
              <Styled.Header>{note.title}</Styled.Header>
            </Styled.Row>
            <Styled.TextArea>{note.description}</Styled.TextArea>
          </>
        ) : (
          <Form
            form={form}
            id="edit-note"
            layout="vertical"
            onFinish={saveEdit}
            onValuesChange={() => setHasChanged(true)}
            autoComplete="off"
            size="large"
            style={{
              padding: 16,
            }}
          >
            <Form.Item
              initialValue={note.title}
              name="title"
              label={<Styled.TitleModal>Title</Styled.TitleModal>}
              rules={[{ required: true, message: 'Please input your Title!' }]}
            >
              <Styled.SaveInput />
            </Form.Item>
            <Form.Item
              initialValue={note.description}
              name="description"
              label={<Styled.TitleModal>Description</Styled.TitleModal>}
              rules={[
                { required: true, message: 'Please input your Description!' },
              ]}
            >
              <Styled.SaveText />
            </Form.Item>
          </Form>
        )}
        <Styled.RowButton>
          {isEditMode ? (
            <>
              <Styled.BackButton onClick={() => setEditMode(false)}>
                Cancel
              </Styled.BackButton>
              <Styled.SaveButton
                disabled={!hasChanged}
                htmlType="submit"
                form="edit-note"
              >
                Save
              </Styled.SaveButton>
            </>
          ) : (
            <>
              <Styled.BackButton onClick={() => navigate(-1)}>
                Go Back
              </Styled.BackButton>
              <Styled.BackButton onClick={() => setEditMode(true)}>
                Edit
              </Styled.BackButton>
            </>
          )}
        </Styled.RowButton>
      </Styled.All>
    </Fragment>
  );
};
