
    module.exports = function (app) {
        const modelName = "apis";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
apiName: { type:  String , comment: "Api  Name, p, false, false, false, true, false, false, false, , , , ," },
url: { type:  String , comment: "Url, p, false, false, false, true, false, false, false, , , , ," },
request: { type: Schema.Types.Mixed , comment: "Request, p, false, false, false, true, false, false, false, , , , ," },
params: { type: Schema.Types.Mixed , comment: "Params, p, false, false, false, true, false, false, false, , , , ," },
method: { type:  String , comment: "Method, p, false, false, false, true, false, false, false, , , , ," },
token: { type:  String , comment: "Token, p, false, false, false, true, false, false, false, , , , ," },
authorization: { type:  String , comment: "Authorization, p, false, false, false, true, false, false, false, , , , ," },
response: { type: Schema.Types.Mixed , comment: "Response, p, false, false, false, true, false, false, false, , , , ," },

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