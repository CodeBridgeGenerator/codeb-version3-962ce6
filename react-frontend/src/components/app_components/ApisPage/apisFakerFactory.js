
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
apiName: faker.lorem.sentence(1),
url: faker.lorem.sentence(1),
request: faker.lorem.sentence(1),
params: faker.lorem.sentence(1),
method: faker.lorem.sentence(1),
token: faker.lorem.sentence(1),
authorization: faker.lorem.sentence(1),
response: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
