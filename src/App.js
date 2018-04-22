import React, { Component } from 'react';
import './App.css';

import QuizTypes from './QuizTypes/QuizTypes';
import SelectedQuiz from './SelectedQuiz/SelectedQuiz';

class App extends Component {
    state = {
        quizTypes: [
            { id: 1, name: 'all'},
            { id: 2, name: 'pitchers'},
            { id: 3, name: 'infielders'},
            { id: 4, name: 'outfielders'},
        ],
        pitchers: [
            {
                num: 21,
                name: 'Zack Greinke',
                position: 'Starting Pitcher',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/425844.jpg',
                category: 'pitchers'
            },
            {
                num: 38,
                name: 'Robbie Ray',
                position: 'Starting Pitcher',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/592662.jpg',
                category: 'pitchers'
            },
            {
                num: 46,
                name: 'Patrick Corbin',
                position: 'Starting Pitcher',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/571578.jpg',
                category: 'pitchers'
            },
            {
                num: 52,
                name: 'Zack Godley',
                position: 'Starting Pitcher',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/643327.jpg',
                category: 'pitchers'
            }
        ],
        infielders: [
            {
                num: 44,
                name: 'Paul Goldschmidt',
                position: '1B',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/502671.jpg',
                category: 'infielders'
            },
            {
                num: 3,
                name: 'Daniel Descalso',
                position: '3B',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/518614.jpg',
                category: 'infielders'
            },
            {
                num: 53,
                name: 'Christian Walker',
                position: '1B',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/572233.jpg',
                category: 'infielders'
            },
            {
                num: 4,
                name: 'Ketel Marte',
                position: '2B',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/606466.jpg',
                category: 'infielders'
            },
            {
                num: 13,
                name: 'Nick Ahmed',
                position: 'SS',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/605113.jpg',
                category: 'infielders'
            },
            {
                num: 5,
                name: 'Alex Avila',
                position: 'C',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/488671.jpg',
                category: 'infielders'
            },
            {
                num: 2,
                name: 'Jeff Mathis',
                position: 'C',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/425772.jpg',
                category: 'infielders'
            },
            {
                num: 36,
                name: 'John Ryan Murphy',
                position: 'C',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/571974.jpg',
                category: 'infielders'
            },
        ],
        selectedQuiz: null,
    };

    /**
     * On quiz select, create quiz object to keep track of
     * players, the current question index, selected radio button
     * and right and wrong answers
     * @param selected - the selected quiz
     */
    selectQuiz = (selected) => {
        const quiz = {
            selected: selected.name,
            players: this.shuffle(this.state[selected.name]),
            questionIndex: 0,
            selectedAnswer: null,
            right: 0,
            wrong: 0
        };
        this.setState({selectedQuiz: quiz})
    };

    /**
     * Shuffle array taken from stack overflow
     * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
     */
    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };


    /**
     * On radio change, update selectedAnswer for current quiz
     * @param event - the radio button change
     */
    onRadioChange = (event) => {
        const quizCopy = { ...this.state.selectedQuiz };
        quizCopy.selectedAnswer = event.target.value;
        this.setState({selectedQuiz: quizCopy});
    };

    /**
     * Check if the player at the current index matches the selected answer
     */
    checkAnswer = () => {
        const player = this.state.selectedQuiz.players[this.state.selectedQuiz.questionIndex];
        const selectedAnswer = this.state.selectedQuiz.selectedAnswer;

        const quizCopy = { ...this.state.selectedQuiz };
        player.name === selectedAnswer ? quizCopy.right++ : quizCopy.wrong++;
        quizCopy.questionIndex++;
        quizCopy.selectedAnswer = null;
        this.setState({selectedQuiz: quizCopy});
    };


  render() {
    return (
      <div className="App">
        <header className="jumbotron text-center">
            <img src="https://upload.wikimedia.org/wikipedia/en/8/89/Arizona_Diamondbacks_logo.svg" alt="diamondbacks logo"/>
            <QuizTypes
                selected={this.selectQuiz}
                types={this.state.quizTypes} />
        </header>
          <main>
            <SelectedQuiz
                quiz={this.state.selectedQuiz}
                changed={this.onRadioChange}
                check={this.checkAnswer}
            />
          </main>
      </div>
    );
  }
}

export default App;
