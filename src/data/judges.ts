interface Judge {
  name: string;
  birthDate: Date;
  getAge: () => number;
}

function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

export const judges: Judge[] = [
  {
    name: 'Alex',
    birthDate: new Date('2014-02-01'),
    getAge() {
      return calculateAge(this.birthDate);
    }
  },
  {
    name: 'Victoria',
    birthDate: new Date('2015-07-01'),
    getAge() {
      return calculateAge(this.birthDate);
    }
  },
  {
    name: 'Cecilia',
    birthDate: new Date('2019-07-01'),
    getAge() {
      return calculateAge(this.birthDate);
    }
  }
]; 