const body = document.querySelector("body")

/*
    Note:
    Use fetch() to simplify handling of Promise object

    Next... mySQL Database
*/

function getUser() {
// fetch() sends a GET request (by default) to the given URL; returns a Promise...
fetch('https://randomuser.me/api')      // ...1st Promise obj resolves to Response obj
  .then((response) => {
    if (response.status === 200) { //  (response.ok)
      return (response.json()) // Response method .json() returns Promise...
    }
    else
      throw response.status
      // return Promise.reject('Error: ' + response.status)
    }) 
  .then((userData) => {                 //...2nd Promise obj resolves to JSON
            const apiFirst = userData.results[0].name.first;
            const apiLast = userData.results[0].name.last;
            const apiCountry = userData.results[0].location.country;
            const apiTime = userData.results[0].location.timezone.offset;

            const htmlData = `
            <img  class="user" src=${userData.results[0].picture.large} alt="rando user">
            <h2 class="user">${apiFirst} ${apiLast}</h2>
            <p class="user">${apiFirst} lives in ${apiCountry} </p>
            <input type="hidden" name="apiFirst" value="${apiFirst}"/>
            `
            apiData = document.getElementById("apiData")
            apiData.innerHTML = htmlData
            document.getElementById("addBtn").value = `Add ${apiFirst}`
  })
  .catch(error => {
    mdnCodes = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
    apiData.innerHTML = `<h2>Problem: <a href=${mdnCodes}>${error} Error</a></h2>`
  })
} // close getUser

getUser()
getBtn.addEventListener("click", getUser)