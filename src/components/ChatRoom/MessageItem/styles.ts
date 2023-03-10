import styled from 'styled-components';

export const MessageItemContainer = styled.li`
  display: flex;
  align-items: center;
  &.my-message {
    justify-content: flex-end;
    p {
      flex: inherit;
      margin-left: 5px;
      color: ${({ theme }) => theme.color.text_white};
      background-color: ${({ theme }) => theme.color.main};
    }
  }
  p {
    flex: 1;
    margin-left: 10px;
    margin-right: 5px;
    padding: 10px 12px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.color.msg_bg};
    border-radius: 20px;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;
    line-height: 1.3;
  }
  span {
    align-self: flex-end;
    margin-bottom: 10px;
    font-size: 13px;
    color: #aaa;
  }
  & + li {
    margin-top: 10px;
  }
`;
