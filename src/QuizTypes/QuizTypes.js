import React from 'react';

const quizTypes = (props) => {
    const buttons = props.types.map(type => {
        return (
            <button
                key={type.id}
                onClick={() => props.selected(type)}
                className="btn btn-primary">{type.name}</button>
        );
    });
    return (
        <div className="QuizTypes">
            {buttons}
        </div>
    );
};


export default quizTypes;