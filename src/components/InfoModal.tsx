import { ReactNode } from "react";
import { Icon, Modal } from "semantic-ui-react";

interface InfoModalProps {
  header?: ReactNode;
  content?: ReactNode;
}

export const InfoModal = ({ header, content }: InfoModalProps) => {
  if (content) {
    return (
      <div style={{ paddingLeft: "1rem" }}>
        <Modal
          trigger={
            <Icon
              name="info circle"
              color="grey"
              style={{ cursor: "pointer" }}
              size="large"
            />
          }
          size="tiny"
          closeIcon
        >
          {header ? <Modal.Header>{header}</Modal.Header> : null}
          <Modal.Content>{content}</Modal.Content>
        </Modal>
      </div>
    );
  }
  return <></>;
};
