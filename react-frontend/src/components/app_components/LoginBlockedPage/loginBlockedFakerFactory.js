
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
policyName: faker.lorem.sentence(1),
blockedIp: faker.lorem.sentence(1),
startBlockedIp: faker.lorem.sentence(1),
endBlockedIp: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
