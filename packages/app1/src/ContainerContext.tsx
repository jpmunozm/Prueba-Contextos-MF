import { createContext } from 'react';

export interface IUserContext {
    data: string
};

const ContainerContext = createContext<IUserContext>({data: 'Datos del Container'});

export default ContainerContext;