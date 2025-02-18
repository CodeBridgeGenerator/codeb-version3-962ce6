
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds,environmentIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
name: faker.lorem.sentence(1),
environment: environmentIds[i % environmentIds.length],
domain: faker.lorem.sentence(1),
appName: faker.lorem.sentence(1),
appDir: faker.lorem.sentence(1),
appProjectName: faker.lorem.sentence(1),
appObjectName: faker.lorem.sentence(1),
appPortNumber: faker.lorem.sentence(1),
isDefault: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
