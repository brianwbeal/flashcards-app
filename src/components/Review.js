import React, { useContext, useEffect, useState } from 'react';

// context
import { AppContext } from '../context/AppContext';

// router
import {
    Link
  } from 'react-router-dom';

export const Review = () => {

    const { cards, getCards, deleteCard } = useContext(AppContext);
    const [count, setCount] = useState(0);
    const [isFront, setIsFront] = useState(true);

    useEffect(() => {
        getCards(); // eslint-disable-next-line
    }, []);

    const navLast = () => {
        if (isFront === false) {
            setIsFront(true);
        };
        
        if (count === 0) {
            setCount((cards.length - 1));
        } else {
            setCount(count - 1);
        };
    }
    
    const flip = () => {
        setIsFront(!isFront)
    }
    
    const navNext = () => {
        if (isFront === false) {
            setIsFront(true);
        };
        
        if (count === (cards.length - 1)) {
            setCount(0);
        } else {
            setCount(count + 1);
        };
    }

    if (!cards[0]) {
        return (
            <div className="review">
            <header className="header">
                <div className="container header-flex">
                     <div className="header-flex__child">
                         <Link to="/add" className="header-button"><i class="fas fa-plus"></i></Link>
                     </div>
                     <div className="header-flex__child">
                     <button  
                         disabled
                         className="header-button"
                         onClick={() => {
                         deleteCard(cards[count].id);
                         setCount(0);
                     }}><i class="fas fa-times"></i></button>
                     </div>
                </div>
            </header>
            <main className="review-main">
                 <div className="container review-main-flex">
                     <div className="card-display">
                        <p>use the <i class="fas fa-plus"></i> sign above to add cards.</p>
                     </div>
                     <div className="card-controls">
                     <button disabled onClick={navLast}><i class="fas fa-arrow-left"></i></button>
                    <button disabled onClick={flip}><i class="fas fa-redo-alt"></i></button>
                    <button disabled onClick={navNext}><i class="fas fa-arrow-right"></i></button>
                     </div>
                 </div>
            </main>
        </div> 
        )
    } else {
        return (
           <div className="review">
               <header className="header">
                   <div className="container header-flex">
                        <div className="header-flex__child">
                            <Link to="/add" className="header-button"><i class="fas fa-plus"></i></Link>
                        </div>
                        <div className="header-flex__child">
                        <button  
                            className="header-button"
                            onClick={() => {
                            deleteCard(cards[count].id);
                            setCount(0);
                        }}><i class="fas fa-times"></i></button>
                        </div>
                   </div>
               </header>
               <main className="review-main">
                    <div className="container review-main-flex">
                        <div className="card-display">
                            <div className="card" onClick={flip}>                      
                                <div className={ isFront ? "card-inner" : "card-inner flipped" }>
                                    <div className="card-front">
                                        <p>{cards[count].front}</p>
                                    </div>
                                    <div className="card-back">
                                        <p>{cards[count].back}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-counter">
                            <p>{count + 1} / {cards.length}</p>
                        </div>
                        <div className="card-controls">
                            <button onClick={navLast}><i class="fas fa-arrow-left"></i></button>
                            <button onClick={flip}><i class="fas fa-redo-alt"></i></button>
                            <button onClick={navNext}><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
               </main>
           </div> 
        )
    }
}