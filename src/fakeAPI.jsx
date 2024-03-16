const books = [
    { id: 1, title: "Book 1", description: "Description for Book 1", author:"Anya"},
    { id: 2, title: "Book 2", description: "Description for Book 2", author:"Connor"},
    { id: 3, title: "Book 3", description: "Description for Book 3", author:"Mia"}
  ];
 
  const FAKE_DELAY= 2000;

  const fakeAPI = {
    fetchBooks: () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(books)
            }, FAKE_DELAY)
        })
    }
  }

  export default fakeAPI;
  
