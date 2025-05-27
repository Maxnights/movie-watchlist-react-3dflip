// src/components/Add.js
import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-poster" />
    <div className="skeleton-text-line short" />
    <div className="skeleton-text-line long" />
  </div>
);

export const Add = () => {
  const [query, setQuery]   = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&language=en-US&page=1&include_adult=false&query=${
        encodeURIComponent(value)
      }`
    )
      .then((r) => r.json())
      .then((data) => {
        setResults(Array.isArray(data.results) ? data.results : []);
        setLoading(false);
      })
      .catch(() => {
        setResults([]);
        setLoading(false);
      });
  };

  return (
    <div className="add-page">
      <section className="search-hero">
        <div className="search-hero-bg" />
        <div className="search-hero-content container">
          <h2 className="search-hero-title">Find Your Next Movie</h2>
          <div className="search-box">
            <i className="fas fa-search search-icon" />
            <input
              className="search-input"
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>
        </div>
      </section>

      <div className="container">
        {loading ? (
          <div className="movie-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : results.length > 0 ? (
          <ul className="results movie-grid">
            {results.map((movie) => (
              <li key={movie.id}>
                <ResultCard movie={movie} />
              </li>
            ))}
          </ul>
        ) : query ? (
          <h2 className="no-movies">No movies found!</h2>
        ) : null}
      </div>
    </div>
  );
};
