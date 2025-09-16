import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

// 570 maximal
// 768
export const ContentWrapper = styled("div")`
  max-width: 680px; 

  @media only screen and (max-width: 878px) {
    max-width: 100%;
  }
`;
