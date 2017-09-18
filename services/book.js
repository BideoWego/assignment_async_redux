require('es6-promise').polyfill();
require('isomorphic-fetch');
const xml2js = require('xml2js');
const util = require('util');
const xml = {
  json: util.promisify(xml2js.parseString)
};
const qs = require('qs');
const _ = require('lodash');
const striptags = require('striptags');


const GOODREADS_BASE_URL = 'https://goodreads.com';
const GOODREADS_API_KEY = process.env.GOODREADS_API_KEY;




function pubDateFrom(book) {
  let year = book.original_publication_year[0]._;
  let month = book.original_publication_month[0]._ || '1';
  let day = book.original_publication_day[0]._ || '1';
  let pubDate = _.compact([
    year,
    month.padStart(2, '0'),
    day.padStart(2, '0')
  ]).join('-');
  return pubDate;
}


function parseSearchResults(json) {
  let books = json.GoodreadsResponse.search[0].results[0].work;
  return books.map(book => {
    let bestBook = book.best_book[0];

    let id = +bestBook.id[0]._;
    let title = bestBook.title[0];
    let author = bestBook.author[0].name[0];
    let image = bestBook.small_image_url[0];
    let pubDate = pubDateFrom(book);

    return {
      id,
      pubDate,
      title,
      author,
      image
    };
  });
}


function parseShowResults(json) {
  let book = json.GoodreadsResponse.book[0];
  let work = book.work[0];

  let id = +book.id[0];
  let title = book.title[0];
  let author = book.authors[0].author[0].name[0];
  let image = book.image_url[0];
  let description = striptags(book.description[0]);
  let url = book.url[0];
  let pubDate = pubDateFrom(work);

  return {
    id,
    title,
    author,
    image,
    description,
    url,
    pubDate
  };
}




const Book = {};


Book.search = async (q) => {
  const query = qs.stringify({ key: GOODREADS_API_KEY, q });
  let response = await fetch(`${ GOODREADS_BASE_URL }/search?${ query }`);
  let text = await response.text();
  let json = await xml.json(text)
  json = parseSearchResults(json);
  return json;
};


Book.find = async (id) => {
  let response = await fetch(
    `${ GOODREADS_BASE_URL }/book/show/${ id }.xml?key=${ GOODREADS_API_KEY }`
  );
  let text = await response.text();
  let json = await xml.json(text);
  json = parseShowResults(json);
  return json;
};




module.exports = Book;















