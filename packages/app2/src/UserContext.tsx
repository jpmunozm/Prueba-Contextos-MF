import { createContext } from 'react';

export interface IUserContext {
    data: string
  };

const UserContext = createContext<IUserContext>({data: 'Datos app Hijo'});

export default UserContext;