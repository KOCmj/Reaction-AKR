import { useState } from 'react';
import { server_calls } from '../api/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons';

interface Book {
  id: string;
  IBSN: string;
  title: string;
  author: string;
  published_date: string;
  category: string;
  image: string;
}

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [showImageModal, setShowImageModal] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isImageUrlValid(searchTerm)) {
      setImageUrl(searchTerm);
      setShowImageModal(true);
      setShowSearchResults(false);
    } else {
      setImageUrl('');
      setShowImageModal(false);
      try {
        const data = await server_calls.get();
        const filteredBooks = data.filter((book: Book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredBooks);
        setShowSearchResults(true);
      } catch (error) {
        console.error('Error searching for books:', error);
      }
    }
  };

  const isImageUrlValid = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setImageUrl('');
  };

  const closeSearchResults = () => {
    setShowSearchResults(false);
    setSearchResults([]);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch} className="relative ml-4 flex items-center">
        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            className="bg-purple-300 text-black placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md py-2 pl-8 hover:bg-blue-400 hover:placeholder-blue-900"
            type="search"
            name="searchTerm"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
      {showImageModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={closeImageModal}
        >
          <div
            className="modal-content bg-white rounded-lg p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-bold text-center items-center">
                Book Image
              </h2>
              <button className="text-xl" onClick={closeImageModal}>
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
            <div className="mt-4">
              <img
                src={imageUrl}
                alt="Book Image"
                className="w-auto max-w-full h-auto max-h-96 border-4 border-cyan-500 rounded-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      )}
      {showSearchResults && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
          onClick={closeSearchResults}
        >
          <div
            className="search-results-container bg-blue-300 rounded-lg p-8 max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-bold text-center items-center">
                Search Results
              </h2>
              <button className="text-xl" onClick={closeSearchResults}>
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((book: Book) => (
                <div key={book.id} className="card">
                  {book.image && (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}
                  <div className="p-4">
                    <h2 className="text-center font-bold text-xl mb-2">
                      {book.title}
                    </h2>
                    <p className="text-center">Author: {book.author}</p>
                    <p className="text-center">Category: {book.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;

