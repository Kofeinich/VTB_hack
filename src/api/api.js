import {request} from "./request";

export const signUp = async (email, name, lastName, password ) => {
	const response = await request('/registration', 'POST', {email, name, lastName, password, notificationFlag: false})
	if (response) {
		localStorage.setItem('token', response.accessToken)
		return response.accessToken
	}
}

export const signIn = async (login, password ) => {
	const response = await request('/login', 'POST', {login, password})
	if (response) {
		localStorage.setItem('token', response.accessToken)
		return response.accessToken
	}
}

export const signOut = async () => {
	request('/logout', 'POST', null)
	localStorage.removeItem('token')
}

export const getProfile = async () => {
	const response = await request('/profile')
	return response
}

export const getProfileById = async (id) => {
	const response = await request(`/profiles/users/${id}`)
	return response
}

export const getFirstNFTs = async () => {
	const response = await request('/clans')
	console.log('response', response)
	return response
}

export const getItem = async (item) => {
	const response = await request(`/files/${item}`)
	console.log('response', response)
	return response
}

export const signToClan = async (id) => {
	request(`/clans/${id}`, 'POST', null)
}

export const getNftById = async (id) => {
	const response = await request(`/ntfs/${id}`)
	return response
}

export const transferDrTo = async (id, amount) => {
	request(`/transfer/users/${id}`, 'POST', {
		"type": "DR",
		"amount": amount
	}).then(() => {
		return 'Перевод выполняется'
	})
}
