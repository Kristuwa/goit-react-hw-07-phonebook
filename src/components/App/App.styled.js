import styled from '@emotion/styled';

import url from '../../img/bg-phone.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: centre;
  justify-content: space-around;
  gap: 100px;
  padding: 20px 100px;
`;

export const TitleForm = styled.h1`
  text-align: center;
  font-size: 34px;
  color: #1e1d1d;
  margin-bottom: 20px;
`;

export const TitleContacts = styled.h2`
  text-align: center;
  font-size: 34px;
  color: #1e1d1d;
  margin-bottom: 25px;
`;

export const ContentBlock = styled.div`
  width: 410px;
  background-image: url(${url});
  background-color: #cccccc;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 10px solid black;
  border-bottom: 80px solid black;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 8px 8px 8px 0px rgba(255, 255, 255, 0.5);
`;
