/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function github(username){

  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      // debugger
      const card = userComponent(response.data);
      userDetails.appendChild(card);
      // console.log();
      // userDetails.appendChild(response.data)
      // console.log(response);
    })
    .catch(error => {
      // debugger
    });
}



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [ "ifiokudoidiok", "tetondan",  "dustinmyers",  "justsml",  "luishrd",  "bigknell"];
followersArray.forEach(element => {github(element)});
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
*/

/*
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function userComponent(user){
  // debugger
  //Creat Variables 
  const userContainer = document.createElement('div');
    const userImage = document.createElement('img');
    const userInfo = document.createElement('div');
      const userName = document.createElement('h3');
      const userAlias = document.createElement('p');
      const userLocation = document.createElement('p');
      const userProfile = document.createElement('p');
        const userProfileLink = document.createElement('a');
      const userFollowers = document.createElement('p');
      const userFollowing = document.createElement('p');
      const userBio = document.createElement('p');
  
  //Add classes to elements
  userContainer.classList.add('card');
  userInfo.classList.add('card-info');
  userName.classList.add('name');
  userAlias.classList.add('username');

  //Content
  userImage.setAttribute('src', user.avatar_url);
  userName.textContent = user.name;
  userAlias.textContent = user.login;
  userLocation.textContent = `Location: ${user.location}`;
  userProfileLink.textContent = `Profile : ${user.html_url}`;
  userFollowers.textContent = `Followers: ${user.followers}`;
  userFollowing.textContent = `Following: ${user.following}`;
  userBio.textContent = `Bio: ${user.bio}`;


  if (user.location === null){
    userLocation.textContent = "Location: Unknown";
  }
  if (user.bio === null){
    userBio.textContent = `Bio: -----`;
  }

  //Append children
  userContainer.appendChild(userImage);
  userContainer.appendChild(userInfo);
    userInfo.appendChild(userName);
    userInfo.appendChild(userAlias);
    userInfo.appendChild(userLocation);
    userInfo.appendChild(userProfile);
      userProfile.appendChild(userProfileLink)
    userInfo.appendChild(userFollowers);
    userInfo.appendChild(userFollowing);
    userInfo.appendChild(userBio);
    
  return userContainer;


};

const userDetails = document.querySelector('.cards');


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
