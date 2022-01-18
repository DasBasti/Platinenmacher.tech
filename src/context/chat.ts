import React from 'react'
import tmi from 'tmi.js'

const ChatContext = React.createContext<tmi.Client|undefined>(undefined)

export const ChatProvider = ChatContext.Provider
export const ChatConsumer = ChatContext.Consumer

export default ChatContext
