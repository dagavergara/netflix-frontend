import { useState } from 'react'
import styled from "styled-components";
import { Search } from "@material-ui/icons";

export default function Searching() {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  return (
    <Container>
      <div className={`search ${showSearch ? "show-search" : ""}`}>
        <button
          onFocus={() => setShowSearch(true)}
          onBlur={() => {
            if (!inputHover) {
              setShowSearch(false);
            }
          }}
        >
          <Search />
        </button>
        <input
          type="text"
          placeholder="Search"
          onMouseEnter={() => setInputHover(true)}
          onMouseLeave={() => setInputHover(false)}
          onBlur={() => {
            setShowSearch(false);
            setInputHover(false);
          }}
        />
      </div>
    </Container >
  )
}

const Container = styled.div`        
  .search {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    padding-left: 0.5rem;
    button {
      background-color: transparent;
      border: none;
      &:focus {
        outline: none;
      }
      svg {
        color: white;
        font-size: 1.2rem;
      }
    }
    input {
      width: 0;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s ease-in-out;
      background-color: transparent;
      border: radius;
      color: white;
      &:focus {
        outline: none;
      }
    }
  }
  .show-search {
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    input {
      width: 100%;
      opacity: 1;
      visibility: visible;
      padding: 0.3rem;
    }
  }
`;