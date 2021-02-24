// Something that can be reported
interface Reportable {
  summary(): string;
};

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string{
    return `Name: ${this.name}, Year: ${this.year}, Broken? ${this.broken}`
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);