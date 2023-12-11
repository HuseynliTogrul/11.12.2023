const athletes = [
  {
    name: "Usain Bolt",
    sport: "Track and Field",
    hasWorldRecord: true,
    gender: "Male",
    age: 35,
    totalMedals: 8,
    country: "Jamaica",
  },
  {
    name: "Simone Biles",
    sport: "Gymnastics",
    hasWorldRecord: false,
    gender: "Female",
    age: 25,
    totalMedals: 12,
    country: "United States",
  },
  {
    name: "Michael Phelps",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Male",
    age: 37,
    totalMedals: 28,
    country: "United States",
  },
  {
    name: "Katie Ledecky",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Female",
    age: 25,
    totalMedals: 10,
    country: "United States",
  },
  {
    name: "Allyson Felix",
    sport: "Track and Field",
    hasWorldRecord: false,
    gender: "Female",
    age: 36,
    totalMedals: 9,
    country: "United States",
  },
  {
    name: "Nadia Comăneci",
    sport: "Gymnastics",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 9,
    country: "Romania",
  },
  {
    name: "Birgit Fischer",
    sport: "Canoeing",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 12,
    country: "Germany",
  },
  {
    name: "Mariana Pajón",
    sport: "Cycling",
    hasWorldRecord: false,
    gender: "Female",
    age: 30,
    totalMedals: 4,
    country: "Colombia",
  },
  {
    name: "Wayne Gretzky",
    sport: "Ice Hockey",
    hasWorldRecord: false,
    gender: "Male",
    age: 61,
    totalMedals: 4,
    country: "Canada",
  },
  {
    name: "Yuna Kim",
    sport: "Figure Skating",
    hasWorldRecord: false,
    gender: "Female",
    age: 31,
    totalMedals: 6,
    country: "South Korea",
  },
];


// 1. Dünya rekordu olan atletlərdən ibarət array yaratmaq.

const athleteHasWorldRecord = athletes.filter((a, i, arr) => {
  return a.hasWorldRecord;
});

console.log("1. Dünya rekordu olan atletlərdən ibarət array yaratmaq.")
console.log(athleteHasWorldRecord);


// 2. Medallarının sayı 10 və daha artıq olan qadın atletlərdən ibarət array yaratmaq.

const CountFemaleAthleteMedal = athletes.filter((a, i, arr) => {
  return a.totalMedals > 10 & a.gender == "Female";
});

console.log("2. Medallarının sayı 10 və daha artıq olan qadın atletlərdən ibarət array yaratmaq.")
console.log(CountFemaleAthleteMedal);


// 3. Atletlərin adlarından ibarət array yaratmaq.

const findAthletesName = athletes.map((a, i, arr) => {
  return a.name;
})

console.log("3. Atletlərin adlarından ibarət array yaratmaq.")
console.log(findAthletesName);


// 4. Atletlərin adları və ölkələri olan obyektlərdən ibarət array yaratmaq.

const showAthletesCountry = athletes.map((a) => {
  return {
    name: a.name,
    country: a.country,
  }
})

console.log("4. Atletlərin adları və ölkələri olan obyektlərdən ibarət array yaratmaq.")
console.log(showAthletesCountry);


// 5. Bütün atletlərin ümumi medallarının sayını hesablamaq.

newTotalMedals = 0;

const CountAthleteMedal = athletes.map((a) => {
  return newTotalMedals += a.totalMedals
})

console.log("5. Bütün atletlərin ümumi medallarının sayını hesablamaq.")
console.log(newTotalMedals);


// 6. Atletlərin medallarının sayının artım sırasına görə sıralanmış array yaratmaq.

const sortAthletesMedal = athletes.sort((a, b) => {
  return a.totalMedals - b.totalMedals;
});

console.log("6. Atletlərin medallarının sayının artım sırasına görə sıralanmış array yaratmaq.")
console.log(sortAthletesMedal);


// 7. Atletlərin adlarının əlifba sırası ilə sıralanmış array yaratmaq.

const sortedAthletesName = athletes.slice().sort((a, b) => {
  return a.name.localeCompare(b.name);
});

console.log("7. Atletlərin adlarının əlifba sırası ilə sıralanmış array yaratmaq.")
console.log(sortedAthletesName);


// 8. Atletin adına əsasən spesifik obyekti tapıb console-a yazmaq.

console.log("8. Atletin adına əsasən spesifik obyekti tapıb console-a yazmaq.")

function findAthleteByName(athletes, name) {
  const foundAthlete = athletes.find((athlete) => athlete.name === name);
  return foundAthlete;
}
const specificAthlete = findAthleteByName(athletes, "Usain Bolt");

if (specificAthlete) {
  console.log("Spesifik atletin məlumatları:", specificAthlete);
} else {
  console.log("Belə bir atlet tapılmadı.");
}


// 9. Hər hansı bir kişi atletin dünya rekordu olub olmamasını yoxlamaq.

const hasAthleteWorldRecord = athletes.some((a, i, arr) => {
  if (a.gender = "Male") {
    return a.hasWorldRecord;
  }
});

console.log("9. Hər hansı bir kişi atletin dünya rekordu olub olmamasını yoxlamaq.")
console.log(hasAthleteWorldRecord);

// 10. Amerikalı və dünya rekordu olan atletlərin adlarından ibarət array yaratmaq.

const hasWorldRecordAmerican = athletes.filter((a, i, arr) => {
  if (a.country = "United States") {
    if (a.hasWorldRecord) {
      return a.name;
    }
  }
});

console.log("10. Amerikalı və dünya rekordu olan atletlərin adlarından ibarət array yaratmaq.")
console.log(hasWorldRecordAmerican);


// 11. Kişi atletlərin yaşlarının ortalamasını tapmaq.

function averageMaleAthletes(athletes) {

  const maleAthletes = athletes.filter((athlete) => athlete.gender === "Male");

  const totalAge = maleAthletes.reduce((sum, athlete) => sum + athlete.age, 0);

  const averageAgeForMaleAthletes = totalAge / maleAthletes.length;

  return averageAgeForMaleAthletes;
}
const averageAgeForMaleAthletes = averageMaleAthletes(athletes);

console.log("11. Kişi atletlərin yaşlarının ortalamasını tapmaq.")
console.log(averageAgeForMaleAthletes);