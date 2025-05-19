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
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const result = await response.text();  // Get the raw text response
    console.log(result);  // Log the result to check what is returned
    
    // Check if the result contains the password directly or needs parsing
    const passwordMatch = result.match(/Random password: (.+)/);  // Adjust regex as needed based on the API response
    if (passwordMatch && passwordMatch[1]) {
      password.value = passwordMatch[1];  // Set the password input field with the correct password
    } else {
      // If no match, assume the result is the password directly
      password.value = result;
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function copy() {
  password.select();
  document.execCommand("copy");
}
