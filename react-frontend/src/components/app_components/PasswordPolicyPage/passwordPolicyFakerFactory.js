
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
policyName: faker.lorem.sentence(1),
passwordLength: faker.lorem.sentence(1),
capitalLetters: faker.lorem.sentence(1),
specialCharacters: faker.lorem.sentence(1),
numbers: faker.lorem.sentence(1),
allowOldPasswordReuse: faker.lorem.sentence(1),
isDefault: faker.lorem.sentence(1),
passwordRenewalTimeline: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
