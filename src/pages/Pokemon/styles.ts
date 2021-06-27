import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
  }
`
export const Profile = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #202020;
  h2 {
    margin-top: 10px;
    font-size: 50px;
  }
  svg {
    position: absolute;
    top: 30px;
    left: 70px;
    color: #202020;
    font-size: 50px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 100%;
    height: 100%;
    font-size: 40px;
    h2 {
      font-size: 30px;
      margin-bottom: 20px;
    }
    img {
      width: 120px;
      margin-top: 50px;
    }
    svg {
      position: absolute;
      top: 15px;
      left: 15px;
      font-size: 40px;
      color: #202020;
    }
  }
`
export const DetailsPokemon = styled.div`
  width: 100%;
  height: 100%;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 60px;

  @media screen and (max-width: 1000px) {
    padding-top: 50px;
    row-gap: 30px;
  }
`

export const HeightAndWeight = styled.div`
  display: flex;
  width: 100%;
  max-width: 530px;
  justify-content: space-around;
  color: #f2f2f5;

  > div {
    text-align: center;
    strong {
      font-size: 24px;
    }
    p {
      font-size: 20px;
    }

    @media screen and (max-width: 1000px) {
      strong {
        font-size: 20px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`

export const Details = styled.div`
  display: flex;
  width: 100%;
  max-width: 530px;
  justify-content: space-around;
  color: #f2f2f5;
`

export const Skills = styled.div`
  display: flex;
  width: 100%;
  max-width: 530px;
  justify-content: space-around;

  > div {
    text-align: center;
    strong {
      font-size: 24px;
    }
    p {
      font-size: 20px;
    }

    @media screen and (max-width: 1000px) {
      strong {
        font-size: 20px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`

export const Stats = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  .box-stats {
    width: 100%;
    max-width: 500px;
    margin: auto;
    h3 {
      text-align: center;
      color: #f2f2f5;
      margin-bottom: 10px;
    }
    .stat {
      background-color: #ccc;
      width: 100%;
      max-width: 500px;
      height: 27px;
      position: relative;
      border-radius: 20px;
      p {
        position: absolute;
        top: 2px;
        left: 0;
        right: 0;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 0 20px 30px;
    row-gap: 20px;
    .box-stats .stat {
      height: 18px;
      p {
        top: 0;
      }
    }
  }
`

export const Bar = styled.div<{ stat: number }>`
  background-color: red;
  width: ${props => props.stat}%;
  height: 27px;
  border-radius: 20px;

  @media screen and (max-width: 1000px) {
    height: 18px;
  }
`
