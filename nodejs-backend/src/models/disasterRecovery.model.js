
    module.exports = function (app) {
        const modelName = "disaster_recovery";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
drName: { type:  String , comment: "DR Name, p, false, false, false, true, false, false, false, , , , ," },
isDefault: { type: Boolean, required: false, comment: "isDefault, p_boolean, false, false, false, true, false, false, false, , , , ," },
username: { type:  String , comment: "Username, p, false, false, false, true, false, false, false, , , , ," },
password: { type:  String , comment: "Password, p, false, false, false, true, false, false, false, , , , ," },
port: { type:  String , comment: "Port, p, false, false, false, true, false, false, false, , , , ," },
url: { type:  String , comment: "URL, p, false, false, false, true, false, false, false, , , , ," },

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