import React from 'react';

const CardCase = ({ children, cardTitle, cardBtntext, cardBtnLink, cardBg,cardBorder}) => {
    return (
        <div className={`card ${cardBg}`}>
            <div className={`card-header card__header ${cardBorder}`}>
                <div className='card__title'>{cardTitle}</div>
                {cardBtntext && (
                    <div className='card__button'>
                        <a className='card__link' href={cardBtnLink}>{cardBtntext}</a>
                    </div>
                )}
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
};

export default CardCase;