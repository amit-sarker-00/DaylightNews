import React from 'react';

const GoToTop = () => {
    const goToTopBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    return (
        <div>
            <button className='' onClick={goToTopBtn}>
                BackToTop
            </button>
        </div>
    );
};

export default GoToTop;