import styled from "styled-components";

export const Dashboard = styled.section`
  @media screen and (max-width: 540px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95vw;
    height: 70px;
    border-bottom: 3px solid #212529;
    .headerDashboard {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 700px;
      margin-bottom: 25px;
      margin: 30px;
    }
  }
  @media screen and (min-width: 541px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: 70px;
    border-bottom: 3px solid #212529;
    margin: 30px;
  }
  .headerDashboard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 700px;
    margin-bottom: 25px;
  }
`;
