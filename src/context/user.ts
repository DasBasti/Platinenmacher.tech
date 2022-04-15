import React from 'react';

export type UserContextT = {
    username: string;
}

const UserContext = React.createContext<UserContextT|undefined>(undefined);

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext
