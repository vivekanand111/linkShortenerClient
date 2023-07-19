import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';

function ShortenLinkForm() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validator.isURL(originalUrl, { require_protocol: true })) {
      alert("Please enter Complete Valid URL")
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/links', { originalUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      alert("Failed Service Please Try Later")
    }
  };

  return (
    <div className="container mt-4">
      <h3>Link Shortener</h3>
      <form onSubmit={handleFormSubmit} className="input-group mb-3">
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter URL"
          className="form-control"
        />
        <button className="btn btn-primary" type="submit">Shorten</button>
      </form>
      {shortUrl &&
        <div className="mt-4">
          <p style={{ fontWeight: 'bold' }}>Short URL :- 
          <a href={shortUrl} target="_blank" >{shortUrl}</a>
          </p>
        </div>
      }
    </div>
  );
}

export default ShortenLinkForm;
