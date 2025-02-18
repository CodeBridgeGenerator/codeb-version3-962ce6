
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
policyName: faker.lorem.sentence(1),
useEmail: faker.lorem.sentence(1),
useGoogle: faker.lorem.sentence(1),
useStaffId: faker.lorem.sentence(1),
useLinkedIn: faker.lorem.sentence(1),
isDefault: faker.lorem.sentence(1),
googleAuthenticator: faker.lorem.sentence(1),
msAuthenticator: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
