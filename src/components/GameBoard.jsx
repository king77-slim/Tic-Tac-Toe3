import React, { useEffect } from 'react';

export default function GameBoard({ onSelectSquare, board }) {
  useEffect(() => {
    // Function to load the AdSense script
    const loadAdSenseScript = () => {
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9549238187891217";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      script.onload = () => {
        // Initialize the ad
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      };
    };

    // Load the AdSense script
    loadAdSenseScript();
  }, []);

  return (
    <div>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
      {/* AdSense ad container */}
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-9549238187891217"
           data-ad-slot="7329154350"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
}
