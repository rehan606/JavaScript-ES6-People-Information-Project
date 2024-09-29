const polapain = [
    { Name: "Abul", job: "sorkari", salary: 17000 },
    { Name: "Babul", job: "besorkari", salary: 25000 },
    { Name: "Kabul", job: "sorkari", salary: 21000 },
    { Name: "Habul", job: "besorkari", salary: 47000 },
    { Name: "Jabul", job: "sorkari", salary: 23000 },
    { Name: "Mabul", job: "besorkari", salary: 55000 },
    { Name: "Rehan", job: "sorkari", salary: 55000 },
];
  
// sorkari >= 20000 or  besorkari >=40000

const findBor = polapain.filter((bor) => (bor.job === "sorkari" && bor.salary >= 20000) || (bor.job === "besorkari" && bor.salary >= 40000))

console.log(findBor)
const lotarry = Math.floor(Math.random()*findBor.length)
console.log(findBor[lotarry].Name)


