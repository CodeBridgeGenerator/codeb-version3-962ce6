
    module.exports = function (app) {
        const modelName = "login_blocked";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
policyName: { type:  String , comment: "Policy Name, p, false, false, false, true, false, false, false, , , , ," },
blockedIp: { type:  String , comment: "Blocked IP, p, false, false, false, true, false, false, false, , , , ," },
startBlockedIp: { type:  String , comment: "Start Blocked IP, p, false, false, false, true, false, false, false, , , , ," },
endBlockedIp: { type:  String , comment: "End Blocked IP, p, false, false, false, true, false, false, false, , , , ," },

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