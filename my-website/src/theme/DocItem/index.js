import React, { useState, useEffect } from 'react';
import DocItem from '@theme-original/DocItem';
import { useLocation } from '@docusaurus/router';

export default function DocItemWrapper(props) {
  const [isPersonalized, setIsPersonalized] = useState(false);
  const [isUrduTranslated, setIsUrduTranslated] = useState(false); // New state for Urdu translation
  const location = useLocation();
  const chapterId = location.pathname.split('/').pop(); // Simple extraction of chapter ID from URL

  const handlePersonalizeToggle = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please sign in to personalize content.');
      return;
    }

    try {
      const response = await fetch(`/personalize/${chapterId}/personalize`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        alert(`Personalized content for chapter ${chapterId}:\n${data.content}`);
        setIsPersonalized(!isPersonalized);
      } else {
        const errorData = await response.json();
        alert(`Failed to get personalized content: ${errorData.detail}`);
      }
    } catch (error) {
      console.error('Error fetching personalized content:', error);
      alert('Error fetching personalized content.');
    }
  };

  const handleUrduTranslateToggle = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please sign in to translate content.');
      return;
    }

    try {
      const response = await fetch(`/translate/${chapterId}/translate/ur`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        alert(`Urdu Translated content for chapter ${chapterId}:\n${data.content}`);
        setIsUrduTranslated(!isUrduTranslated); // Toggle state, not actually updating content here
      } else {
        const errorData = await response.json();
        alert(`Failed to get Urdu translated content: ${errorData.detail}`);
      }
    } catch (error) {
      console.error('Error fetching Urdu translated content:', error);
      alert('Error fetching Urdu translated content.');
    }
  };

  return (
    <>
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={handlePersonalizeToggle}>
          {isPersonalized ? 'Show Original Content' : 'Personalize Content'}
        </button>
        {isPersonalized && <span>(Showing Personalized Version)</span>}

        <button onClick={handleUrduTranslateToggle}>
          {isUrduTranslated ? 'Show Original Language' : 'Translate to Urdu'}
        </button>
        {isUrduTranslated && <span>(Showing Urdu Translation)</span>}
      </div>
      <DocItem {...props} />
    </>
  );
}
