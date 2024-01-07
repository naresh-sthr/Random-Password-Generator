let password = document.querySelector('#input-txt');
const url = 'https://password-generator-by-api-ninjas.p.rapidapi.com/v1/passwordgenerator?length=15&exclude_numbers=false&exclude_special_chars=false';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe40e8244amsh83947b0d58bf458p196ccejsnb97101ec693c',
		'X-RapidAPI-Host': 'password-generator-by-api-ninjas.p.rapidapi.com'
	}
};

async function main(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
  password.value = result.random_password;
} catch (error) {
	console.error(error);
}
}

function copy(){
  password.select();
  document.execCommand("copy");
}
