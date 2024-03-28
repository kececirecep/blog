import './App.css';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';
import PostDetails from './Pages/PostDetails/PostDetails';

import Dashboard from './Pages/Dashboard/DashboardPage/Dashboard'
import Posts from './Pages/Dashboard/Posts/Posts';
import AddPost from './Pages/Dashboard/Posts/AddPost';
import Media from './Pages/Dashboard/Media/Media';
import AddMedia from './Pages/Dashboard/Media/AddMedia';
import AddCategory from './Pages/Dashboard/Category/AddCategory';

function App() {
  return (
    <div className="App">
        <Dashboard/>
    </div>
  );
}

export default App;
