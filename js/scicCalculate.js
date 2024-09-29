//-------------------------------------------------------------------


const students = [
    { name: "mehedy bro", email: "mehedy@gamil.com", avg: 56, fiftyPercent: true,},
    { name: "rokib bro", email: "rokib@gamil.com", avg: 57, fiftyPercent: false },
    { name: "sakib bro", email: "sakib@gamil.com", avg: 42, fiftyPercent: false },
    { name: "sojib bro", email: "sojib@gamil.com", avg: 52, fiftyPercent: true },
    { name: "sunny bro", email: "sunny@gamil.com", avg: 32, fiftyPercent: false },
    { name: "saki bro", email: "sunny@gamil.com", avg: 37, fiftyPercent: true },
    { name: "jackie bro", email: "jackie@gamil.com", avg: 57, fiftyPercent: true },
];

  
// scic = avg = 48, fiftyPercent = true
  
// METHOD 01 - USING NORMALY FILTER WITH ARROW FUNCTION

//   const candidate = students.filter((std) => std.avg >= 48 && std.fiftyPercent === true)
//   console.log(candidate)
  
  
 // METHOD 02- uSING FUNCTION
const findScic = (students) => {
  const scic = students.filter(
    (stdt) => stdt.avg >= 48 && stdt.fiftyPercent === true
  );
    
  const names = scic.map((n) => n.name)
  return names
}

const results = findScic(students)
console.log(result)

  
// METHOD 03- SINGLE LINE METHOD
const findSci = (students) => students.filter((stdt) => stdt.avg >= 48 && stdt.fiftyPercent === true ).map((s) => s.name)
  
const result = findSci(students)
console.log(result)