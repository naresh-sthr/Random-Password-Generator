let password = document.querySelector('#input-txt');
const url = 'https://random-password-generator5.p.rapidapi.com/random-password/index.php?length=10&lower_case=true&upper_case=true&numbers=true&symbols=true';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f10a9955b5msha85578bc3aca352p11f23ejsn25f6072b7bf4',
    'x-rapidapi-host': 'random-password-generator5.p.rapidapi.com'
  }
};

async function main() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();  // Using .text() instead of .json()
    password.value = result;  // Set the password input field with the result
  } catch (error) {
    console.error(error);
  }
}

function copy() {
  password.select();
  document.execCommand("copy");
}
