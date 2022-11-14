import { ReactNode } from "react";
import { Icon, Modal } from "semantic-ui-react";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";

interface InfoModalProps {
  header?: ReactNode;
  content?: ReactNode;
  iconSize?: IconSizeProp;
}

export const InfoModal = ({ header, content, iconSize = "large" }: InfoModalProps) => {
  if (content) {
    return (
      <div style={{ paddingLeft: "1rem" }}>
        <Modal
          trigger={
            <Icon
              name="info circle"
              color="grey"
              style={{ cursor: "pointer" }}
              size={iconSize}
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
