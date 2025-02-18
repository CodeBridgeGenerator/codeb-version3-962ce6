
    module.exports = function (app) {
        const modelName = "pages";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
pageName: { type:  String , comment: "Page Name, p, false, false, false, true, false, false, false, , , , ," },
route: { type:  String , comment: "Route, p, false, false, false, true, false, false, false, , , , ," },
fields: { type: Schema.Types.Mixed , comment: "Fields, p, false, false, false, true, false, false, false, , , , ," },

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