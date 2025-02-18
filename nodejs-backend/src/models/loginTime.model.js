
    module.exports = function (app) {
        const modelName = "login_time";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
policyName: { type:  String , comment: "Policy Name, p, false, false, false, true, false, false, false, , , , ," },
startTime: { type: Date, comment: "Start Time, p_date, false, false, false, true, false, false, false, , , , ," },
endTime: { type: Date, comment: "End Time, p_date, false, false, false, true, false, false, false, , , , ," },
holidays: { type: Date, comment: "Holidays, p_date, false, false, false, true, false, false, false, , , , ," },

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