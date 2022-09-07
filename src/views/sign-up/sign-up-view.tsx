import React, { ReactElement } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Menu from '../shared/components/menu';
import { H1 } from '../layout/layout.styles';
import { getLocaleDateString } from '../shared/utils/locale-datetime';

import useSignUp, { HookData } from './use-sign-up';
import {
  Wrapper,
  Form,
  Input,
  InputFile,
  Button,
  Droparea,
  ClearButton,
  Preview,
  Img,
  Label,
  Select,
} from './sign-up.styles';

const SignUpView: React.FC<HookData> = (): ReactElement => {
  const {
    data,
    movies,
    sitRows,
    sitPlaces,
    handleChangeData,
    handleChangeAvatar,
    handleSubmit,
    handleClearAvatar,
    handleChangeMovieId,
    handleChangeSitRow,
    handleChangeSitPlace,
  } = useSignUp();

  return (
    <Wrapper>
      <Menu />
      <Form onSubmit={handleSubmit}>
        <Row center="xs">
          <Col xs={12} md={4}>
            <H1>Sign up for a movie</H1>
            <Droparea >
              <span>Thumbnail</span>
              {data.avatarBase64 && (<>
                <Preview>
                  <Img src={data.avatarBase64} alt="Thumbnail" />
                </Preview>
                <ClearButton onClick={handleClearAvatar}>Delete Avatar</ClearButton></>)
              }
              {!data.avatarBase64 && <input type="file" name="file" onChange={handleChangeAvatar} />}
            </Droparea>
            <Label>
              First Name:
              <Input
                type="text"
                value={data.firstName}
                onChange={(e) => handleChangeData("firstName", e.target.value)}
                role='input-firstName'
              />
            </Label><Label>
              Last Name:
              <Input type="text" value={data.lastName} onChange={(e) => handleChangeData("lastName", e.target.value)} />
            </Label><Label>
              Email:
              <Input type="text" value={data.email} onChange={(e) => handleChangeData("email", e.target.value)} />
            </Label><Label>
              Phone:
              <Input type="text" value={data.phone} onChange={(e) => handleChangeData("phone", e.target.value)} />
            </Label><Label>
              Movie:
              {/* {movies && (<Select onChange={(e) => console.log(e.target.labels)} > */}
              {movies && (<Select onChange={(e) => handleChangeMovieId(e.target.value)} >
                <option value=''>--</option>
                {movies.map((movie) => (<option key={movie._id}
                  value={movie._id}>
                  {movie.title} - {getLocaleDateString(movie.startDate)}
                </option>))}
              </Select>)}
            </Label><Label>
              Sit Row:
              <Select onChange={(e) => handleChangeSitRow(e.target.value)} >
                <option>--</option>
                {sitRows && sitRows.map(sit => (<option key={sit} value={sit}>{sit}</option>))}
              </Select>
            </Label><Label>
              Sit Place:
              <Select onChange={(e) => handleChangeSitPlace(e.target.value)} >
                <option>--</option>
                {sitPlaces && sitPlaces.map(sit => (<option key={sit} value={sit}>{sit}</option>))}
              </Select>
            </Label>
            <Button id="#submit" type="submit">Save</Button>
          </Col>
        </Row>
      </Form>

    </Wrapper>
  );
};

export default SignUpView
