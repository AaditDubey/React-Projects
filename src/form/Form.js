import React, { useEffect, useState, useContext } from 'react'
import './form.css'
import { UserContext } from '../App'
import { mockSubmit } from './mock-api-call'
const Form = () => {
	const user = useContext(UserContext)
	const [data, setData] = useState({
		name: '',
		opportunity: '',
		uni: '',
		gender: '',
	})
	const [count, setCount] = useState(0)

	useEffect(() => {
		let temp = 0
		if (data.name.length != 0) temp++
		if (data.opportunity.length != 0) temp++
		if (data.uni.length != 0) temp++
		if (data.gender.length != 0) temp++

		setCount(temp)
		console.log(data)
	}, [data])

	const disable =
		data.name.length < 6 ||
		!data.opportunity ||
		data.uni.length < 10 ||
		!data.gender

	const TextBoxEntry = ({ label, handleOnChange, value }) => {
		return (
			<div className='form-input'>
				<label htmlFor={label}>{label}</label>
				<br />
				<input
					type='text'
					id={label}
					value={value}
					onChange={handleOnChange}
				></input>
			</div>
		)
	}

	const DropDownEntry = ({ label, options, handleOnChange, value }) => {
		return (
			<div className='form-input'>
				<label htmlFor={options.toString()}>{label}</label>
				<br />
				<select
					id={options.toString()}
					value={value}
					onChange={handleOnChange}
				>
					<option value=''>Please Select</option>
					{options.map((x) => (
						<option
							value={x}
							key={x}
						>
							{x}
						</option>
					))}
				</select>
			</div>
		)
	}

	const handleSubmit = async (data) => {
		try {
			const message = await mockSubmit(data)
			alert(message)
		} catch (err) {
			alert(err)
		}
	}
	return (
		<div className='main'>
			<h1>
				Welcome {user.firstName} {user.lastName}
			</h1>
			<h1>Form</h1>
			<div className='form-container'>
				<div className='bar-total'>
					<div
						className='bar-progress'
						style={{ width: `${count * 25}%` }}
					></div>
				</div>
				<TextBoxEntry
					label='Full Name'
					value={data['name']}
					handleOnChange={function (e) {
						setData((prev) => ({ ...prev, name: e.target.value }))
					}}
				/>

				<DropDownEntry
					label='Oppurtunity seeked'
					options={['Full-time', 'Part-time', 'Internship', 'None']}
					value={data.opportunity}
					class='jk'
					handleOnChange={(e) => {
						setData((prev) => ({
							...prev,
							opportunity: e.target.value,
						}))
					}}
				/>

				{TextBoxEntry({
					label: 'Univeristy attended',
					value: data.uni,
					handleOnChange: function (e) {
						setData((prev) => ({ ...prev, uni: e.target.value }))
					},
				})}

				<DropDownEntry
					label='Gender'
					options={['Male', 'Female', 'Third party']}
					value={data.gender}
					handleOnChange={(e) => {
						setData((prev) => ({ ...prev, gender: e.target.value }))
					}}
				/>
				<button
					disabled={disable}
					onClick={() => handleSubmit(data)}
				>
					Submit
				</button>
			</div>
		</div>
	)
}

export default Form
