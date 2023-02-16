import styled from 'styled-components';

export const Div = styled.div`
  width: 70%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 5% 5% 0;
  ul {
    width: 95%;
    height: 80%;
    background: transparent;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
    overflow: auto;
    @media screen and (min-width: 768px) {
      width: 90%;
      flex-direction: row;
      gap: 1rem;
    }
    li {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: '2rem';
      height: 30vh;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 5%;
      @media screen and (min-width: 768px) {
        width: 15vw;
        height: 75%;
        margin: 0 auto;
      }
      img {
        width: 100%;
        height: 40%;
        position: absolute;
        object-fit: cover;
        top: 0;
        border-radius: 5% 5% 0 0;
      }
      div {
        margin-top: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media screen and (min-width: 768px) {
          margin-top: 60%;
        }
        p {
          font-size: 0.4rem;
          font-weight: 100;
          color: #fff;
          text-align: center;
          @media screen and (min-width: 768px) {
            font-size: 0.8vw;
            font-weight: 100;
            margin-top: 0.2rem;
          }
        }
      }
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 1vh;
    margin-top: 1rem;
    input {
      margin-left: 1rem;
      margin-bottom: 2rem;
      height: 2.6rem;
      width: 60%;
      background-color: #151414;
      border: transparent 1.5px solid;
      color: #b5b5b5;
      @media screen and (min-width: 768px) {
        height: 8vh;
        width: 20vw;
        font-size: 1.5vw;
      }
      &::placeholder {
        color: #b5b5b5;
        padding-left: 10px;
        font-family: Poppins;
        font-weight: 200;
      }
    }
  }
  button {
    margin-bottom: 2rem;
    width: 25vw;
    height: 4vh;
    background-color: #0f2435;
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      width: 10vw;
      height: 4vh;
      font-size: 1vw;
    }
  }
  .buttonCircle {
    width: 10vw;
    border-radius: 50%;
    @media screen and (min-width: 768px) {
      width: 7vw;
      height: 10vh;
      font-size: 1vw;
    }
  }
  p {
    color: #fff;
    font-size: 1.2rem;
    font-family: 'poppins';
    font-weight: 400;
    @media screen and (min-width: 768px) {
      font-size: 2vw;
    }
  }

  .divInfo {
    margin: 0;
  }
`;
