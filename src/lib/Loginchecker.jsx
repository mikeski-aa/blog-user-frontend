// this function will call the API that will verify whether a user is logged in
// if a user is loged in, it will return values: true + username

async function Logincheck() {
  const url = "http://localhost:3000/logincheck";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });

    if (!response.ok) {
      throw new Error(`Error with authentication ${response.status}`);
    }

    const json = await response.json();

    // if authentication has failed, nothing will be returned by the response, as api will give an error
    const checkResult = {
      name: json.username,
      id: json.id,
      login: true,
    };
    return checkResult;
  } catch (error) {
    console.log(error);
  }
}

export default Logincheck;
