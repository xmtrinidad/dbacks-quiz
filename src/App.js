import React, { Component } from 'react';
import './App.css';

import QuizTypes from './QuizTypes/QuizTypes';
import SelectedQuiz from './SelectedQuiz/SelectedQuiz';

class App extends Component {
    state = {
        quizTypes: [
            { id: 1, name: 'pitchers'},
            { id: 2, name: 'infielders'},
            { id: 3, name: 'outfielders'},
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
            },
            {
                num: 31,
                name: 'Brad Boxberger',
                position: 'Closing Pitcher',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/502202.jpg',
                category: 'pitchers'
            },
            {
                num: 25,
                name: 'Archie Bradley',
                position: 'Relief Pitcher',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/605151.jpg',
                category: 'pitchers'
            },
            {
                num: 66,
                name: 'Yoshihisa Hirano',
                position: 'Relief Pitcher',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/673633.jpg',
                category: 'pitchers'
            },
            {
                num: 40,
                name: 'Andrew Chafin',
                position: 'Relief Pitcher',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/605177.jpg',
                category: 'pitchers'
            },
            {
                num: 30,
                name: 'T.J. McFarland',
                position: 'Relief Pitcher',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/519008.jpg',
                category: 'pitchers'
            },
            {
                num: 29,
                name: 'Jorge De La Rosa',
                position: 'Relief Pitcher',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/407822.jpg',
                category: 'pitchers'
            },
            {
                num: 57,
                name: 'Fernando Salas',
                position: 'Relief Pitcher',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/477569.jpg',
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
                num: 22,
                name: 'Jake Lamb',
                position: 'C',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/571875.jpg',
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
        outfielders: [
            {
                num: 6,
                name: 'David Peralta',
                position: 'RF',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/444482.jpg',
                category: 'outfielders'
            },
            {
                num: 1,
                name: 'Jarrod Dyson',
                position: 'CF',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/502481.jpg',
                category: 'outfielders'
            },
            {
                num: 11,
                name: 'A.J. Pollock',
                position: 'CF',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/572041.jpg',
                category: 'outfielders'
            },
            {
                num: 3,
                name: 'Daniel Descalso',
                position: '3B',
                img: 'http://mlb.mlb.com/mlb/images/players/head_shot/518614.jpg',
                category: 'infielders'
            },
        ],
        choices: [],
        selectedQuiz: null,
        selectedAnswer: null
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
            right: 0,
            wrong: 0
        };
        this.setState({ selectedQuiz: quiz }, () => {
            this.setState({ choices: this.randomChoices() });
        });

    };

    /**
     * Get 4 random choices including correct answer
     */
    randomChoices = () => {
        const playersArray = this.state.selectedQuiz.players;
        let answer = this.state.selectedQuiz.players[this.state.selectedQuiz.questionIndex];
        if (!answer) {
            return;
        }
        const choices = [answer];
        // Get three other random choices to add to array with answer
        for (let i = 0; i <= 2; i++) {
            const item = playersArray[Math.floor(Math.random()*playersArray.length)];
            if (item === answer || choices.includes(item)) {
                i--;
            } else {
                choices.push(item);
            }
        }
        // Return the shuffled array of choices
        return this.shuffle(choices)
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
        let  selectedAnswer = event.target.value;
        this.setState({selectedAnswer: selectedAnswer});
    };

    /**
     * Check if the player at the current index matches the selected answer
     */
    checkAnswer = () => {
        const player = this.state.selectedQuiz.players[this.state.selectedQuiz.questionIndex];
        let selectedAnswer = this.state.selectedAnswer;

        const quizCopy = { ...this.state.selectedQuiz };
        player.name === selectedAnswer ? quizCopy.right++ : quizCopy.wrong++;
        quizCopy.questionIndex++;
        selectedAnswer = null;
        this.setState({
            selectedQuiz: quizCopy,
            selectedAnswer: selectedAnswer,
        }, () => {
            this.setState({choices: this.randomChoices()});
        });
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
                change={this.onRadioChange}
                check={this.checkAnswer}
                choices={this.state.choices}
                selected={this.state.selectedAnswer}
            />
          </main>
      </div>
    );
  }
}

export default App;
