export const getMembers = () => [
  {
    id: "1",
    nic: "200501903425",
    firstName: "Induwara",
    middleName: "Uhsara",
    lastName: " ",
    contactNo: "0786607354",
    address: "55/21, Galabadawatta,",
    userType: "School",
  },
  {
    id: "2",
    nic: "200501903425",
    firstName: "Red",
    middleName: "Bird",
    lastName: " ",
    contactNo: "0786607354",
    address: "55/21, Galabadawatta,",
    userType: "School",
  },
  {
    id: "3",
    nic: "200501903425",
    firstName: "Walter",
    middleName: "O'",
    lastName: "Brien",
    contactNo: "0786607354",
    address: "55/21, Galabadawatta,",
    userType: "School",
  },
  {
    id: "4",
    nic: "200501903425",
    firstName: "Bruce",
    middleName: "Wayne",
    lastName: " ",
    contactNo: "0786607354",
    address: "55/21, Galabadawatta,",
    userType: "School",
  },
  {
    id: "5",
    nic: "200501903425",
    firstName: "Peter",
    middleName: "Parker",
    lastName: " ",
    contactNo: "0786607354",
    address: "55/21, Galabadawatta,",
    userType: "School",
  },
];

export const addMemberAPI = (data) => {
  getMembers().push(data);
  //   console.log(getMembers());
  console.log(data);
};
//getMembers.push(data)
