const people = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    contact: {
      email: "john.doe@example.com",
    },
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
    social: {
      twitter: "@johndoe",
    },
    hobbies: ["Coding", "Hiking", "Photography"],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    occupation: "Graphic Designer",
    contact: {
      email: "jane.smith@example.com",
      phone: "987-654-3210",
    },
    hobbies: ["Drawing", "Traveling"],
  },
  {
    id: 3,
    name: "Mark Johnson",
    age: 40,
    occupation: "Marketing Manager",
    contact: {
      email: "mark.johnson@example.com",
      phone: "123-456-7890",
    },
    address: {
      street: "789 Oak St",
      city: "Chicago",
      state: "IL",
      zip: "60607",
    },
    hobbies: ["Running", "Golf"],
  },
];


const peopleList = document.getElementById("people-list");
const personInfo = document.getElementById("person-info")



const renderPeopleList = (people) => {
  people.map((person) => {
    const li = document.createElement('li')
    li.classList.add("font-semiBold" , "cursor-pointer", "py-3", "mt-3", "bg-gray-300","rounded-md")
    li.textContent = person.name

    li.addEventListener("click", () => {
      handlePersonClick(person.id)
    })

    peopleList.appendChild(li)

  })
}

const handlePersonClick = (id) => {
  const person = people.find((p) => p.id === id)
  displayPersonInfo(person)

  
}

const displayPersonInfo = (person) => {
  personInfo.classList.remove('hidden')
  document.getElementById('no-selection').classList.add('hidden')
  personInfo.innerHTML = `

    <p class="text-white font-semiBold" >  <span class=" font-bold "> ID </span>: ${person.id} </p>
    <h2 class="text-xl text-white font-bold" > <span class=" font-bold "> Name </span>: ${person.name}</h2>
    <p class="text-white font-semiBold" >  <span class=" font-bold "> Age</span> : ${person.age} </p>
    <p class="text-white font-semiBold" >  <span class=" font-bold "> Occupation</span> : ${person.occupation} </p>
    <p class="text-white font-semiBold" >  <span class=" font-bold "> Email</span> : ${person?.contact?.email || "N/A"} </p>
    <p class="text-white font-semiBold" >  <span class=" font-bold "> Phone</span>: ${person?.contact?.phone || "N/A"} </p>
    <p class="text-white font-semiBold" >  <span class=" font-bold "> Hobbies</span> : ${person?.hobbies|| "N/A"} </p>
    <p class="text-white font-bold" > Address :  </p>
    <div class="ml-5" >
      <p class="text-white font-semiBold" >   <span class=" font-bold "> Street</span>: ${person?.address?.street || "N/A"} </p>
      <p class="text-white font-semiBold" >  <span class=" font-bold "> City</span> : ${person?.address?.city || "N/A"} </p>
      <p class="text-white font-semiBold" >  <span class=" font-bold "> State</span> : ${person?.address?.state || "N/A"} </p>
      <p class="text-white font-semiBold" >  <span class=" font-bold "> Zip</span> : ${person?.address?.zip || "N/A"} </p>
    </div>
  `;
  

};

renderPeopleList(people)



























// people.map((person) => {
//   const sentence = `person name is: ${person.name}. person age is: ${person.age}. person city is: ${person?.address?.city || "(N/A)"}`

//   console.log(sentence)
// })

// const p = people.find((p) => p.age == 30)
// console.log(p.name, p.age, p?.contact?.phone || "N/A")