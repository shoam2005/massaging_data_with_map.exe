const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["cow", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["bass", "tuna"],
        },
    },
];

//1
function get_names(data) {
    const names = data.map(value => value.name)
    return names;
}
console.log(get_names(data))

//2
function birth_before_1990(data) {
    const birth_before = data.filter(value => new Date(value.birthday).getFullYear() < 1990);
    return birth_before;
}

console.log(birth_before_1990(data))
//3
function count_food(data) {
    const foods = {}
    data.forEach(person => {
        person.favoriteFoods.meats.forEach(food => {
            foods[food] ? foods[food] += 1 : foods[food] = 1
        })
        person.favoriteFoods.fish.forEach(food => {
            foods[food] ? foods[food] += 1 : foods[food] = 1;
        })
    }
    );
    return foods;
}
console.log(count_food(data))