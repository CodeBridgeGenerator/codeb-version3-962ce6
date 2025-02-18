
    module.exports = function (app) {
        const modelName = "password_policy";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
policyName: { type:  String , comment: "Policy Name, p, false, false, false, true, false, false, false, , , , ," },
passwordLength: { type: Number, comment: "Password Length, p_number, false, false, false, true, false, false, false, , , , ," },
capitalLetters: { type: Number, comment: "Capital Letters, p_number, false, false, false, true, false, false, false, , , , ," },
specialCharacters: { type: Number, comment: "Special Characters, p_number, false, false, false, true, false, false, false, , , , ," },
numbers: { type: Number, comment: "Numbers, p_number, false, false, false, true, false, false, false, , , , ," },
allowOldPasswordReuse: { type: Number, comment: "Allow Old Password reuse, p_number, false, false, false, true, false, false, false, , , , ," },
isDefault: { type: Boolean, required: false, comment: "isDefault, p_boolean, false, false, false, true, false, false, false, , , , ," },
passwordRenewalTimeline: { type: Number, comment: "Password Renewal Timeline, p_number, false, false, false, true, false, false, false, , , , ," },

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