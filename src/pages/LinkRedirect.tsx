import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LinkRedirect() {
  const { shortUrl } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/links/${shortUrl}`);
        const data = response.data;
        //console.log(response.data)
        if (data.status==="success") {
          window.location.href = data.link;
        } else {
          if (data.message === 'URL expired') {
            navigate('/expired');
          } else if (data.message === 'URL not found') {
            navigate('/notfound');
          }
        }
      } catch (error) {
        console.error('Error fetching original URL:', error);
        navigate('/notfound');
      }
    };

    fetchOriginalUrl();
  }, []);

  return <div className="alert alert-info">
    <h3>Redirecting...</h3>
  </div>;
}

export default LinkRedirect;
