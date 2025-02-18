
    module.exports = function (app) {
        const modelName = "firebase";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
name: { type:  String , comment: "Name, p, false, false, false, true, false, false, false, , , , ," },
environment: { type: Schema.Types.ObjectId, ref: "environments", comment: "Environment, dropdown, false, false, false, true, false, false, false, environments, environments, one-to-one, name," },
isDefault: { type: Boolean, required: false, comment: "isDefault, p_boolean, false, false, false, true, false, false, false, , , , ," },

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