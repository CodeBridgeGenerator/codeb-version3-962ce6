
    module.exports = function (app) {
        const modelName = "domains";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
name: { type:  String , comment: "Name, p, false, false, false, true, false, false, false, , , , ," },
environment: { type: Schema.Types.ObjectId, ref: "environments", comment: "Environment, dropdown, false, false, false, true, false, false, false, environments, environments, one-to-one, name," },
domain: { type:  String , comment: "Domain, p, false, false, false, true, false, false, false, , , , ," },
appName: { type:  String , comment: "App Name, p, false, false, false, true, false, false, false, , , , ," },
appDir: { type:  String , comment: "App Dir, p, false, false, false, true, false, false, false, , , , ," },
appProjectName: { type:  String , comment: "App Project Name, p, false, false, false, true, false, false, false, , , , ," },
appObjectName: { type:  String , comment: "App Object Name, p, false, false, false, true, false, false, false, , , , ," },
appPortNumber: { type: Number, comment: "App Port Number, p_number, false, false, false, true, false, false, false, , , , ," },
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