import './todo-list/Input'
import Input from './todo-list/Input'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './nav-bar/NavBar'
import PokeMain from './pokemon/PokeMain'
import Points from './Points/Points'
import Form from './form/Form'
import React from 'react'
import Counter from './counter/Counter'
import Calculator from './Calculator/Calculator'
import MultiForm from './multi-page/Form'
import Synonmys from './Synonyms/Synonyms'
import TicTacToe from './tic-tac-toe/TicTacToe'
export const UserContext = React.createContext()

function App() {
	return (
		<>
			<NavBar />
			<BrowserRouter>
				<div>
					<UserContext.Provider
						value={{ firstName: 'Aadit', lastName: 'Dubey' }}>
						<Routes>
							<Route
								path='/todolist'
								element={<Input />}
							/>
							<Route
								path='/pokemon'
								element={<PokeMain />}
							/>
							<Route
								path='/points'
								element={<Points />}
							/>
							<Route
								path='/synonyms'
								element={<Synonmys />}
							/>
							<Route
								path='/form'
								element={<Form />}
							/>
							<Route
								path='/counter'
								element={<Counter />}
							/>
							<Route
								path='/calculator'
								element={<Calculator />}
							/>
							<Route
								path='/multipage'
								element={<MultiForm />}
							/>
							<Route
								path='/tictactoe'
								element={<TicTacToe />}
							/>
						</Routes>
					</UserContext.Provider>
				</div>
			</BrowserRouter>
		</>
	)
}
export default App
