import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Navbar from './Components/Navbar';

function App() {
  return (
		<div className="App">
			<BrowserRouter>
			<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/quiz' element={<Quiz />}/>
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
