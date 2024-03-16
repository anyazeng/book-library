
import './App.css'
import AddBook from './component/AddBook'
import BookList from './component/BookList'
import store from './redux/store';
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
    <div className='App'>
      <h1>BOOK LIBRARY</h1>
      <AddBook/>
      <BookList/>
    </div>
    </Provider>
  )
}

export default App
