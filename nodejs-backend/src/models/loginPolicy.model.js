
    module.exports = function (app) {
        const modelName = "login_policy";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
policyName: { type:  String , comment: "Policy Name, p, false, false, false, true, false, false, false, , , , ," },
useEmail: { type: Boolean, required: false, default: true, comment: "Use Email, p_boolean, false, false, false, true, false, false, false, , , , ," },
useGoogle: { type: Boolean, required: false, default: false, comment: "Use Google, p_boolean, false, false, false, true, false, false, false, , , , ," },
useStaffId: { type: Boolean, required: false, default: false, comment: "Use Staff ID, p_boolean, false, false, false, true, false, false, false, , , , ," },
useLinkedIn: { type: Boolean, required: false, default: false, comment: "Use LinkedIn, p_boolean, false, false, false, true, false, false, false, , , , ," },
isDefault: { type: Boolean, required: false, default: false, comment: "isDefault, p_boolean, false, false, false, true, false, false, false, , , , ," },
googleAuthenticator: { type: Boolean, required: false, default: false, comment: "Google Authenticator, p_boolean, false, false, false, true, false, false, false, , , , ," },
msAuthenticator: { type: Boolean, required: false, default: false, comment: "MS Authenticator, p_boolean, false, false, false, true, false, false, false, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };