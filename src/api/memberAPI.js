export const getMembers = () => [{
        id: "1",
        nic: "7199433904",
        firstName: "K.",
        middleName: "Induwara",
        lastName: "Uthsara",
        contactNo: "(+94) 786607354",
        address: "Colombo, Sri Lanka.",
        userType: "School",
    },
    {
        id: "2",
        nic: "6880494097",
        firstName: "John",
        middleName: "H.",
        lastName: "Watson",
        contactNo: "(+59) 908484825",
        address: "No. 221B, Baker Street",
        userType: "Employed",
    },
    {
        id: "3",
        nic: "3142292326",
        firstName: "Walter",
        middleName: "O'",
        lastName: "Brien",
        contactNo: "(+30) 655969066",
        address: "USA",
        userType: "University",
    },
    {
        id: "4",
        nic: "2383555012",
        firstName: "Bruce",
        middleName: "Wayne",
        lastName: " Dark Knight",
        contactNo: "(+41) 613906620",
        address: "1007 Mountain Drive",
        userType: "Employed",
    },
    {
        id: "5",
        nic: "7124976322",
        firstName: "Peter",
        middleName: "Benjamin ",
        lastName: "Parker",
        contactNo: "(+67) 111190479",
        address: "20 Ingram Street",
        userType: "School",
    },
];

export const addMemberAPI = (data) => {
    getMembers().push(data);
    //   console.log(getMembers());
    console.log(data);
};
//getMembers.push(data)