import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '../shared/modules/user/model';
import { Movie } from '../shared/modules/movie/model';
import { addUser } from '../shared/modules/user/api/add-user';
import { getMovies } from '../shared/modules/movie/api/get-movies';
import { range } from '../shared/utils/common';
import React from 'react';
import { resolve } from 'path';
import api from '../../services/api';
export interface HookData {
  data: User;
  movies: Movie[];
  sitRows: number[];
  sitPlaces: number[];
  handleChangeData: (fieldName: string, value: string) => void;
  handleChangeAvatar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleClearAvatar: () => void;
  handleChangeMovieId: (movieId: string) => void;
  handleChangeSitRow: (value: string | undefined) => void;
  handleChangeSitPlace: (value: string | undefined) => void;
}

const useSignUp = (): HookData => {
  const navigate = useNavigate();

  const [data, setData] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    avatarBase64: '',
    movie: undefined,
    sitRow: undefined,
    sitPlace: undefined,
  });

  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieId, setMovieId] = useState<string | undefined>(undefined);
  // I was wondering if movieId and setMovieId are really necessary
  useEffect(() => {
    let defMovies = async () => {
      await api.get('/movies').then(
        (response: any) => {
          let res = response.data;
          setMovies(res)
        }
      )
    }
    defMovies();
  }, [])

  const sitRows = useMemo(() => {
    return range(1, 15);
  }, []);

  const sitPlaces = useMemo(() => {
    return range(1, 45);
  }, []);

  // FILL IN THE GAPS
  // Handlers go here
  // ...
  const handleChangeData = (fieldName: string, value: string): void => {
    // change data object attribute according to the fieldName and value
    setData((state: User) => ({ ...state, [fieldName as keyof User]: value }))

  }

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.addEventListener('load', async () => {
        const res = reader.result;

        if (res && typeof res === 'string') {
          handleChangeData('avatarBase64', reader.result as string)
        }
      }, false);
    }
  };

  const handleChangeMovieId = (movieId: string): void => {
    setData((v: User) => ({
      ...v,
      movie: movies.find(movie => (movie._id === movieId)),
    }));
    setMovieId(movieId)
  };

  const handleChangeSitRow = (value: any): void => {
    setData((v: User) => ({
      ...v,
      sitRow: parseInt(value),
    }));
  };

  const handleChangeSitPlace = (value: any): void => {
    setData((v: User) => ({
      ...v,
      sitPlace: parseInt(value),
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    console.log(data)
    await api.post('/register', data)

    navigate('/success');
  };

  const handleClearAvatar = (): void => {
    setData((v: User) => ({
      ...v,
      avatarBase64: '',
    }));
  };


  return {
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
  }
};

export default useSignUp;
