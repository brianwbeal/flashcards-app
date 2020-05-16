// bring in createContext and useReducer hooks
import React, { createContext, useReducer } from 'react';

// bring in reducer to handle changes to app-level state
import AppReducer from './AppReducer';

// initialize starting values in app-level state
export const initialState = {
    test: true,
    cards: []
};

export const AppContext = createContext(initialState);

// declare provider component to wrap app components and make app-level state values available
export const AppProvider = ({  children }) => {

    // set up reducer
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    // declare actions

    // GET_CARDS
    function getCards() {
        try {
            let cards = localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")) : [];
            dispatch({
                type: 'GET_CARDS',
                payload: cards
            })
 
        } catch (err) {
            dispatch({
                type: 'error',
                payload: err
            })
        }
    }

    // DELETE_CARD
    function deleteCard(id) {
        try {
            let currentCards = localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")) : [];
            let newCards = currentCards.filter(card => card.id !== id);
            localStorage.setItem('cards', JSON.stringify(newCards));
            dispatch({
                type: 'DELETE_CARD',
                payload: newCards
            })
        } catch (err) {
            dispatch({
                type: 'error',
                payload: err
            })
        }
    }

    // CREATE_CARD
    function createCard(card) {
        try {
            let currentCards = localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")) : [];
            currentCards.push(card);
            localStorage.setItem('cards', JSON.stringify(currentCards));
            dispatch({
                type: 'CREATE_CARD',
                payload: currentCards
            })
        } catch (err) {
            dispatch({
                type: 'error',
                payload: err
            })
        }
    }

    // return AppProvider component
    return (
        <AppContext.Provider value={{
            test: state.test,
            cards: state.cards,
            getCards,
            deleteCard,
            createCard
        }}>
            {children}
        </AppContext.Provider>
    )
};