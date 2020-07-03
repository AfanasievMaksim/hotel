const initialData= [
  {
    title: "Studio",
    room: 0,
    areaFrom: 33,
    areaTo: 35,
    areaPrice: 45000000,
  },
  {
    title: "1PN+1",
    room: 1,
    areaFrom: 47,
    areaTo: 51,
    areaPrice: 45000000,
  },
  {
    title: "2PN+1WC",
    room: 2,
    areaFrom: 58,
    areaTo: 62,
    areaPrice: 45000000,
  },
  {
    title: "2PN+2WC",
    room: 2,
    areaFrom: 66,
    areaTo: 70,
    areaPrice: 45000000,
  },
  {
    title: "3PN",
    room: 3,
    areaFrom: 80,
    areaTo: 82,
    areaPrice: 45000000,
  }
]

const resultArr = [
  {
    title: "Shophouse",
    room: 1,
    areaFrom: 84,
    areaTo: 230,
    floor: 5,
    areaPrice: 160000000,
  },
  {
    title: "Shophouse",
    room: 1,
    areaFrom: 84,
    areaTo: 230,
    floor: 5,
    areaPrice: 160000000,
  },
];

for (let i = 5; i <= 38; i++) {
  for (let j = 0; j < initialData.length; j++) {
    let tmp = Object.assign({}, initialData[j]);
    tmp.floor = i;
    resultArr.push(tmp);
  }
}

export default resultArr;