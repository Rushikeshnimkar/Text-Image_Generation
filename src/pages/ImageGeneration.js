import React, { useState } from 'react';
import Header from "../components/Header";

function PromptToUrl() {
  const [prompt, setPrompt] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      if (result && result.image_url) {
        setGeneratedUrl(result.image_url);
      } else {
        throw new Error('Image URL not found in response');
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = () => {
    setImageLoadError(true);
  };

  const MyCollection = [
    { imgPath: "https://w.wallhaven.cc/full/l8/wallhaven-l8v7kq.jpg" }
  ];

  const handleDownload = () => {
    if (generatedUrl) {
      const link = document.createElement('a');
      link.href = generatedUrl;
      link.download = 'generated_image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <div className="bg-cover h-screen  flex-col items-center justify-center" style={{ backgroundImage: `url(${MyCollection[0].imgPath})` }}>
        <Header />
        <div className="h-screen text-white flex flex-col items-center pt-30  pt-10 bg-transparent">
          {error && <p className="text-red-500">Error: {error.message}</p>}
          {!generatedUrl && (
            <div className="text-center mb-8">
              <h3 className="text-lg font-bold mb-2">Welcome! to Lazarus AI</h3>
              <p className="text-gray-300">Enter a prompt to generate an image.</p>
            </div>
          )}
          {generatedUrl && (
            <div className="text-center mb-8">
              <h3 className="text-lg font-bold mb-2">Generated Image:</h3>
              {imageLoadError ? (
                <p className="text-red-500">Failed to load image.</p>
              ) : (
                <div className="border border-gray-400 p-2 rounded-md">
                  <img
                    src={generatedUrl}
                    alt="Generated "
                    className="max-w-full h-auto rounded-md"
                    style={{ maxHeight: '400px' }}
                    onError={handleImageError}
                  />
                </div>
              )}
              <button
                onClick={handleDownload}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Download Image
              </button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-auto flex items-center gap-10 pb-32">
            <label className="mr-2 text-lg">
              <input
                type="text"
                placeholder='Enter prompt '
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
                className="ml-2 p-2 border border-gray-400 rounded-md text-black w-96"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">
              {loading ? 'Loading...' : 'Generate'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PromptToUrl;
