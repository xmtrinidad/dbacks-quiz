import React from 'react';

import './SelectedQuiz.css';

const selectedQuiz = (props) => {
    // No quiz selected
    if (props.quiz === null) {
        return ''
    }
    // Quiz selected, map over players array to create content
    else {
        const choices = !props.choices ? '' : props.choices.map((player, i) => {
           return(
               <div key={player.num} className="form-check">
                   <input onChange={props.change} className="form-check-input" type="radio" name="choices" id={`choice_${i}`}
                          value={player.name}/>
                   <label className="form-check-label" htmlFor={`choice_${i}`}>{player.name}</label>
               </div>
           );
        });
        const quizItems = props.quiz.players.map(player => {
            return (
                <div key={player.num} className="card my-3">
                    <div className="content">
                        <div className="text-center">
                            <img className="card-img-top img-fluid" src={player.img} alt={player.name} />
                        </div>
                        <div>
                            {choices}
                        </div>
                    </div>
                    <div className="text-center my-3">
                        <button disabled={props.selected === null} onClick={props.check} type="button" className="btn btn-primary mr-3">Enter</button>
                    </div>
                </div>
            );
        });
        return (
            // If the next index is undefined, quiz is completed
            <div className="Quiz">
                {
                    quizItems[props.quiz.questionIndex] === undefined ?
                        <h1>Right: {props.quiz.right}, Wrong: {props.quiz.wrong}</h1>
                        : quizItems[props.quiz.questionIndex]
                }
            </div>
        );
    }
};

export default selectedQuiz;