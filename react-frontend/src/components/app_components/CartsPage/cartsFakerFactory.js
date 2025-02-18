
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
cartName: faker.lorem.sentence(1),
route: faker.lorem.sentence(1),
fields: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
