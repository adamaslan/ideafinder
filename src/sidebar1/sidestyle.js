import styled from "styled-components";

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 5px;

  &:first-child {
    margin-top: 0px;
  }

  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: ${(props) => (props.main ? "bold" : "normal")};

      &:hover {
        color: #fff;
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: bold;
    }
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 3px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 25px;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 10px;
  }
`;
