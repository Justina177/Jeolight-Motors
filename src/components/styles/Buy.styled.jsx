import styled from "styled-components";



export const Section = styled.section`
  margin: 3rem 5rem;
  .row {
    display: flex;
    gap: 4rem;
    flex-direction: column;
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      img {
        height: 60vh
      }
      h2 {
        font-size: 3rem;
        span {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .row {
      gap: 2rem;
      .col {
        flex-direction: column;
        text-align: center;
        img {
          height: 10rem;
        }
        h2 {
          font-size: 2.0rem;
        }
        &:nth-of-type(2) {
          flex-direction: column-reverse;
        }
      }
    }
  }
`;