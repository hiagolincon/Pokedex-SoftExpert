import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const slide = keyframes`
   0% {
    transform: translatey(0);
  }
  100% {
    transform: translatey(-15px);
  }
`
const slideOut = keyframes`
   0% {
    transform: translatey(-15px);
  }
  100% {
    transform: translatey(0);
  }
`

export const Container = styled.section`
  width: 100%;
  max-width: 1415px;
  padding-top: 50px;
  margin: auto;
  h1 {
    text-align: center;
    padding-top: 31px;
    font-size: 45px;
  }

  button {
    margin: 30px 0;
    background: transparent;
    border: 0;
    width: 100%;
    .loading-more {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .loading-more:after {
      content: ' ';
      display: block;
      border-radius: 50%;
      width: 0;
      height: 0;
      margin: 8px;
      box-sizing: border-box;
      border: 32px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: loading-more 1.2s infinite;
    }
    @keyframes loading-more {
      0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      100% {
        transform: rotate(1800deg);
      }
    }
  }
`

export const SearchList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 50px auto;
  background: #f8f8f8;
  padding: 0 10px;
  border-radius: 30px;
  gap: 10px;

  input {
    border: 0;
    color: #333;
    font-size: 16px;
    background: transparent;
    padding: 10px 0;
    flex: 1;
  }
`

export const PokemonList = styled.div`
  display: grid;
  grid-gap: 80px;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  padding: 20px;

  a {
    display: flex;
    flex-direction: row;

    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 13px;
    padding: 15px;
    color: #f8f8f8;
    box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
    transition: all ease 0.5s;
    max-width: 304px;
    width: 100%;
    align-items: center;
    gap: 10px;
    justify-self: center;

    animation: ${slideOut} 0.3s;
    transition: all 0.3s;
    &:hover {
      animation: ${slide} 0.3s both;
    }

    strong {
      font-size: 22px;
    }

    p {
      padding-top: 15px;
    }
  }

  .loading {
    display: inline-block;
    width: 100%;
    max-width: 100px;
    margin: auto;
    height: 80px;
  }
  .loading:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: loading 1.2s linear infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const BoxPokemon = styled(Link)<{ front: string; back: string }>`
  div {
    background: url(${({ front }) => front}) no-repeat;
    width: 120px;
    height: 120px;
    background-size: 90px;
    background-position: 30px center;
    margin-bottom: 10px;
  }

  &:hover {
    div {
      background-image: url(${({ back }) => back});
    }
  }
`
