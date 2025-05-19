let password = document.querySelector('#input-txt');
const url = 'https://random-password-generator5.p.rapidapi.com/random-password/index.php?length=10&lower_case=true&upper_case=true&numbers=true&symbols=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f10a9955b5msha85578bc3aca352p11f23ejsn25f6072b7bf4',
		'X-RapidAPI-Host': 'random-password-generator5.p.rapidapi.com'
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
