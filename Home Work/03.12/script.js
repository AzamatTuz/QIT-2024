const city = {
    name: 'Almaty',
    population: 2195000,
    districts: [
        { name: 'Alatau', population: 300000, },
        { name: 'Almaly', population: 250000, },
        { name: 'Bostandyk', population: 320000, },
        { name: 'Jetisu', population: 200000, },
    ],
    schools: [
        { name: '№1 мектеп', district: 'Almaly', students: 900, },
        { name: '№2 мектеп', district: 'Alatau', students: 500, },
        { name: '№3 мектеп', district: 'Bostandyk', students: 400, },
        { name: '№4 мектеп', district: 'Jetisu', students: 700, },
    ],
    allPeople: function () {
        let all = 0;

        for (let i = 0; i < this.districts.length; i++) {
            all += this.districts[i].population;
        }

        console.log(`Barlyk kala turgyndary ${all}`);
    },
    allPeopleInSchool: function () {
        let all = 0;

        for (let i = 0; i < this.schools.length; i++) {
            all += this.schools[i].students
        }

        console.log(`Barlyk mektep okushylary ${all}`);
    },
    searchDistrict: function () {
        let a = prompt('Audan atyn jaz');
        for (let i = 0; i < this.districts.length; i++) {
            if (this.districts[i].name === a) {
                console.log(this.districts[i]);
                break;
            }
        }
    }

};

function search() {

}

city.allPeople();
city.allPeopleInSchool();
city.searchDistrict();

