
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
localeName: faker.lorem.sentence(1),
dateFormat: faker.lorem.sentence(1),
timeFormat: faker.lorem.sentence(1),
timeZone: faker.lorem.sentence(1),
currencyFormat: faker.lorem.sentence(1),
currencyIndex: faker.lorem.sentence(1),
currencySymbol: faker.lorem.sentence(1),
country: faker.lorem.sentence(1),
language: faker.lorem.sentence(1),
languages: faker.lorem.sentence(1),
intlDialing: faker.lorem.sentence(1),
isDefault: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
