import { Button, Form, Input, Modal } from 'antd';
import React from 'react';
import type { TNote } from 'elements/NotesViewer';

import * as Styled from './styles';

type AddNoteModalProps = {
  setNotes: React.Dispatch<React.SetStateAction<TNote[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentIdRef: React.MutableRefObject<number>;
  open: boolean;
};

export const AddNoteModal = ({
  setNotes,
  setOpen,
  open,
  currentIdRef,
}: AddNoteModalProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: { title: string; description: string }) => {
    setNotes((prevState) => [
      {
        title: values.title,
        description: values.description,
        id: currentIdRef.current,
      },
      ...prevState,
    ]);
    currentIdRef.current++;
    form.resetFields();
    handleCancel();
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onCancel={handleCancel} footer={false}>
      <Styled.AllModal>
        <Styled.HeaderModal>New Note</Styled.HeaderModal>
      </Styled.AllModal>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        size="large"
      >
        <Form.Item
          name="title"
          label={<Styled.TitleModal>Title</Styled.TitleModal>}
          rules={[{ required: true, message: 'Please input your Title!' }]}
        >
          <Input autoFocus />
        </Form.Item>
        <Form.Item
          name="description"
          label={<Styled.TitleModal>Description</Styled.TitleModal>}
          rules={[
            { required: true, message: 'Please input your Description!' },
          ]}
        >
          <Styled.TextArea />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Add Note
        </Button>
      </Form>
    </Modal>
  );
};
