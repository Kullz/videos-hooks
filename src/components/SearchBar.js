import React, {useState} from 'react';

const SearchBar = ({onSearch}) => {
   const [term, setTerm] = useState('');

   const search = (event) => {
      event.preventDefault();
      onSearch(term);
   }

   return (
      <div className="search-bar ui segment">
         <form className="ui form" onSubmit={search}>
            <div className="field">
               <label>Video Search</label>
               <input type="text"
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
               />
            </div>
         </form>
      </div>
   );
}

export default SearchBar;