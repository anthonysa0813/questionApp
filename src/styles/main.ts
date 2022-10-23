import styled from "styled-components";

export const QuestionGrid = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    span {
      color: var(--bg-fucsia300);
      font-weight: bold;
      font-size: 2.5rem;
    }
  }

  .alert {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid var(--bg-fucsia300);
    color: var(--bg-fucsia300);
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    .readBlog {
      color: var(--bg-dark);
      cursor: pointer;
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

export const QuestionCardContainer = styled.div``;

export const ModalComponentGrid = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShowInfoGrid = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
`;
