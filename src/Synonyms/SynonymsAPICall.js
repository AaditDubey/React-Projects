export const handleGetCall = async (newWord) => {
	try {
		const res = await fetch(
			`https://api.api-ninjas.com/v1/thesaurus?word=${newWord}`,
			{
				headers: {
					'X-Api-Key': 'eheL5YDYcXEVqef4d7qQYw==ReLWkWT02mSijQNG',
				},
			}
		)
		const resJson = await res.json()
		return resJson.synonyms
	} catch (e) {
		console.error(e)
	}
}
