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
