
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
drName: faker.lorem.sentence(1),
isDefault: faker.lorem.sentence(1),
username: faker.lorem.sentence(1),
password: "asdf123",
port: faker.lorem.sentence(1),
url: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
