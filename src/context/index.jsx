import { createContext, useContext, useState } from "react";

// * hada  howa sac  li fih  les variables  li m7taj
const MyContext = createContext()


//* hada howa  livreyur  li ghadi iwasal lina sl3a li  f sac
const MyProvider = ({ children }) => {

     const movieData = [
        {
            title: 'Death Note',
            image: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg',
            description: 'A high school student discovers a notebook that allows him to kill anyone whose name he writes in it, leading to a deadly game of cat and mouse with a detective.',
            releaseDate: 'October 4, 2006'
        },
        {
            title: 'Superbad',
            image: 'https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg',
            description: 'Two high school friends try to make the most of one last party before graduation, leading to a chaotic and hilarious night.',
            releaseDate: 'August 17, 2007'
        },
        {
            title: 'A Quiet Place',
            image: 'https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg',
            description: 'In a world overrun by blind creatures with super-hearing, a family must live in complete silence to survive.',
            releaseDate: 'April 6, 2018'
        },
        {
            title: 'Inception',
            image: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
            description: 'A skilled thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO’s mind.',
            releaseDate: 'July 16, 2010'
        },
        {
            title: "The Matrix",
            image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
            description: 'A computer hacker learns that the reality he lives in is a simulation and joins a rebellion to free humanity from it.',
            releaseDate: 'March 31, 1999'
        },
        {
            title: 'The Lion King',
            image: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
            description: 'A young lion prince flees his kingdom after the death of his father, only to learn the true meaning of responsibility and bravery.',
            releaseDate: 'June 15, 1994'
        },
        {
            title: 'Toy Story',
            image: 'https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
            description: 'The secret lives of toys come to life in this animated classic where a cowboy doll feels threatened by the arrival of a new space ranger.',
            releaseDate: 'November 22, 1995'
        },
        {
            title: 'Gladiator',
            image: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
            description: 'A betrayed Roman general becomes a gladiator and seeks revenge against the corrupt emperor who destroyed his life.',
            releaseDate: 'May 5, 2000'
        }
    ];



    return (   
        <>
            <MyContext.Provider value={movieData}>
                {children}
            </MyContext.Provider>
        </>
    )
}

const useAppContext = () => useContext(MyContext)


export{ MyProvider ,  useAppContext}