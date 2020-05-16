import React, { useState, useContext, useEffect } from 'react';

// context
import { AppContext } from '../context/AppContext';

// router
import {
    Link
  } from 'react-router-dom';

export const Add = () => {

    const { cards, getCards, createCard } = useContext(AppContext);
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    useEffect(() => {
        getCards(); // eslint-disable-next-line
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        let newId = null;

        while (newId === null) {
            let newRando = Math.floor(Math.random() * 100);
            let currentIds = [];

            if (cards.length !== 0) {
                cards.map((card) => {
                    return currentIds.push(card.id)
                });
            }

            if (currentIds.indexOf(newRando) === -1) {
                newId = newRando;
            }
        }

        const newCard = {
            id: newId,
            front,
            back
        };

        createCard(newCard);

        setFront('');
        setBack('');
    }

    return (
        <div className="add">
            <header className="header">
                <div className="container header-flex">
                    <div className="header-flex__child add-child">
                        <Link to="/" className="header-button"><i className="fas fa-arrow-left"></i></Link>
                    </div>
                </div>
            </header>
            <main className="add-main">
                <div className="container add-main-flex">
                    <div className="add-main-flex__child">
                        <h1>add a card</h1>
                        <form className="add-main__form" onSubmit={submitHandler}>
                            <input type="text" value={front} onChange={(e) => setFront(e.target.value)} placeholder="front text" />
                            <input type="text" value={back} onChange={(e) => setBack(e.target.value)} placeholder="back text" />
                            <button><i className="fas fa-plus"></i></button>
                        </form>
                    </div>
                </div>
            </main>
        </div> 
    )
}
