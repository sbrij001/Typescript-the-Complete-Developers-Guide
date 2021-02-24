const profile = {
  name: 'shivani',
  age: 28,
  coordinates: {
    lat:0,
    lng:15
  },
  setAge(age: number): void{
    this.age = age;
  }
};

const { age }: {age : number} = profile;
const {
  coordinates: {lat, lng}
}:{coordinates: {lat: number, lng: number}} = profile;