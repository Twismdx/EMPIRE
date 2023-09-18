import React,{ createContext,useContext,useState,useEffect } from 'react'

const TimerContext = createContext()

export const TimerProvider = ({ children }) => {
    const [timerState,setTimerState] = useState(() => {
        const initialState = [
            { id: 1,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 2,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 3,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 4,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 5,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 6,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 7,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 8,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 9,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 10,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 11,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 12,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 13,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 14,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 16,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 17,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 18,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 19,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 20,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 21,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 22,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 23,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 24,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 25,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 26,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 27,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 28,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 29,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 30,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
            { id: 31,seconds: 0,amount: 0,prepaidAmount: 0,booked: false,reserved: false,disabled: false },
        ]
        return initialState
    })

    return (
        <TimerContext.Provider value={{ timerState,setTimerState }}>
            {children}
        </TimerContext.Provider>
    )
}

export const useTimerContext = () => useContext(TimerContext)