const express = require('express');
const mongoose = require('mongoose');
const app = express();
//const ejs = require('ejs');
//const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect('mongodb+srv://month3project2021:month3project2021@cluster0.2haoc.mongodb.net/MovieDB?retryWrites=true&w=majority');

const moviesSchema = {
    title: String,
    genre: String,
    year: String
}

const Movie = mongoose.model('Movie', moviesSchema);

app.get('/', (_req, res) => {
    Movie.find({}, function(err, movies){
         res.render('index', {
             moviesList: movies
         })
    })
})

app.listen(4040, function() {
    console.log('server is running');
})
